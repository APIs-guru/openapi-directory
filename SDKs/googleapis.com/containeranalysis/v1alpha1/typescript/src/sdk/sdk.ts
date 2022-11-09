import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://containeranalysis.googleapis.com/",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

// SDK Documentation: https://cloud.google.com/container-analysis/api/reference/rest/
export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // ContaineranalysisProjectsNotesCreate - Creates a new `Note`.
  ContaineranalysisProjectsNotesCreate(
    req: operations.ContaineranalysisProjectsNotesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContaineranalysisProjectsNotesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContaineranalysisProjectsNotesCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/notes", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContaineranalysisProjectsNotesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.note = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContaineranalysisProjectsNotesList - Lists all `Notes` for a given project.
  ContaineranalysisProjectsNotesList(
    req: operations.ContaineranalysisProjectsNotesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContaineranalysisProjectsNotesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContaineranalysisProjectsNotesListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/notes", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContaineranalysisProjectsNotesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listNotesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContaineranalysisProjectsOccurrencesCreate - Creates a new `Occurrence`. Use this method to create `Occurrences` for a resource.
  ContaineranalysisProjectsOccurrencesCreate(
    req: operations.ContaineranalysisProjectsOccurrencesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContaineranalysisProjectsOccurrencesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContaineranalysisProjectsOccurrencesCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/occurrences", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContaineranalysisProjectsOccurrencesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.occurrence = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContaineranalysisProjectsOccurrencesGetVulnerabilitySummary - Gets a summary of the number and severity of occurrences.
  ContaineranalysisProjectsOccurrencesGetVulnerabilitySummary(
    req: operations.ContaineranalysisProjectsOccurrencesGetVulnerabilitySummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContaineranalysisProjectsOccurrencesGetVulnerabilitySummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContaineranalysisProjectsOccurrencesGetVulnerabilitySummaryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/occurrences:vulnerabilitySummary", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContaineranalysisProjectsOccurrencesGetVulnerabilitySummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getVulnzOccurrencesSummaryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContaineranalysisProjectsOccurrencesList - Lists active `Occurrences` for a given project matching the filters.
  ContaineranalysisProjectsOccurrencesList(
    req: operations.ContaineranalysisProjectsOccurrencesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContaineranalysisProjectsOccurrencesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContaineranalysisProjectsOccurrencesListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/occurrences", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContaineranalysisProjectsOccurrencesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listOccurrencesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContaineranalysisProjectsOperationsCreate - Creates a new `Operation`.
  ContaineranalysisProjectsOperationsCreate(
    req: operations.ContaineranalysisProjectsOperationsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContaineranalysisProjectsOperationsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContaineranalysisProjectsOperationsCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/operations", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContaineranalysisProjectsOperationsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContaineranalysisProjectsScanConfigsList - Lists scan configurations for a project.
  ContaineranalysisProjectsScanConfigsList(
    req: operations.ContaineranalysisProjectsScanConfigsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContaineranalysisProjectsScanConfigsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContaineranalysisProjectsScanConfigsListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/scanConfigs", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContaineranalysisProjectsScanConfigsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listScanConfigsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContaineranalysisProvidersNotesCreate - Creates a new `Note`.
  ContaineranalysisProvidersNotesCreate(
    req: operations.ContaineranalysisProvidersNotesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContaineranalysisProvidersNotesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContaineranalysisProvidersNotesCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{name}/notes", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContaineranalysisProvidersNotesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.note = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContaineranalysisProvidersNotesDelete - Deletes the given `Note` from the system.
  ContaineranalysisProvidersNotesDelete(
    req: operations.ContaineranalysisProvidersNotesDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContaineranalysisProvidersNotesDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContaineranalysisProvidersNotesDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{name}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContaineranalysisProvidersNotesDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContaineranalysisProvidersNotesGet - Returns the requested `Note`.
  ContaineranalysisProvidersNotesGet(
    req: operations.ContaineranalysisProvidersNotesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContaineranalysisProvidersNotesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContaineranalysisProvidersNotesGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{name}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContaineranalysisProvidersNotesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.note = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContaineranalysisProvidersNotesGetIamPolicy - Gets the access control policy for a note or an `Occurrence` resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. Attempting to call this method on a resource without the required permission will result in a `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and projects/{PROJECT_ID}/notes/{NOTE_ID} for notes
  ContaineranalysisProvidersNotesGetIamPolicy(
    req: operations.ContaineranalysisProvidersNotesGetIamPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContaineranalysisProvidersNotesGetIamPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContaineranalysisProvidersNotesGetIamPolicyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{resource}:getIamPolicy", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContaineranalysisProvidersNotesGetIamPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.policy = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContaineranalysisProvidersNotesList - Lists all `Notes` for a given project.
  ContaineranalysisProvidersNotesList(
    req: operations.ContaineranalysisProvidersNotesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContaineranalysisProvidersNotesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContaineranalysisProvidersNotesListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{name}/notes", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContaineranalysisProvidersNotesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listNotesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContaineranalysisProvidersNotesOccurrencesList - Lists `Occurrences` referencing the specified `Note`. Use this method to get all occurrences referencing your `Note` across all your customer projects.
  ContaineranalysisProvidersNotesOccurrencesList(
    req: operations.ContaineranalysisProvidersNotesOccurrencesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContaineranalysisProvidersNotesOccurrencesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContaineranalysisProvidersNotesOccurrencesListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{name}/occurrences", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContaineranalysisProvidersNotesOccurrencesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listNoteOccurrencesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContaineranalysisProvidersNotesPatch - Updates an existing `Note`.
  ContaineranalysisProvidersNotesPatch(
    req: operations.ContaineranalysisProvidersNotesPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContaineranalysisProvidersNotesPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContaineranalysisProvidersNotesPatchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{name}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContaineranalysisProvidersNotesPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.note = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContaineranalysisProvidersNotesSetIamPolicy - Sets the access control policy on the specified `Note` or `Occurrence`. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a `Note` or an `Occurrence`, respectively. Attempting to call this method without these permissions will result in a ` `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences and projects/{projectid}/notes/{noteid} for notes
  ContaineranalysisProvidersNotesSetIamPolicy(
    req: operations.ContaineranalysisProvidersNotesSetIamPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContaineranalysisProvidersNotesSetIamPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContaineranalysisProvidersNotesSetIamPolicyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{resource}:setIamPolicy", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContaineranalysisProvidersNotesSetIamPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.policy = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContaineranalysisProvidersNotesTestIamPermissions - Returns the permissions that a caller has on the specified note or occurrence resource. Requires list permission on the project (for example, "storage.objects.list" on the containing bucket for testing permission of an object). Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes`
  ContaineranalysisProvidersNotesTestIamPermissions(
    req: operations.ContaineranalysisProvidersNotesTestIamPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContaineranalysisProvidersNotesTestIamPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContaineranalysisProvidersNotesTestIamPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{resource}:testIamPermissions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContaineranalysisProvidersNotesTestIamPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.testIamPermissionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
