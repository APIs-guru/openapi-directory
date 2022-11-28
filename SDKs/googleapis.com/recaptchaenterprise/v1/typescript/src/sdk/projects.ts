import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Projects {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * recaptchaenterpriseProjectsAssessmentsAnnotate - Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
  **/
  recaptchaenterpriseProjectsAssessmentsAnnotate(
    req: operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RecaptchaenterpriseProjectsAssessmentsAnnotateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:annotate", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RecaptchaenterpriseProjectsAssessmentsAnnotateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * recaptchaenterpriseProjectsAssessmentsCreate - Creates an Assessment of the likelihood an event is legitimate.
  **/
  recaptchaenterpriseProjectsAssessmentsCreate(
    req: operations.RecaptchaenterpriseProjectsAssessmentsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RecaptchaenterpriseProjectsAssessmentsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RecaptchaenterpriseProjectsAssessmentsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/assessments", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RecaptchaenterpriseProjectsAssessmentsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudRecaptchaenterpriseV1Assessment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * recaptchaenterpriseProjectsKeysCreate - Creates a new reCAPTCHA Enterprise key.
  **/
  recaptchaenterpriseProjectsKeysCreate(
    req: operations.RecaptchaenterpriseProjectsKeysCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RecaptchaenterpriseProjectsKeysCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RecaptchaenterpriseProjectsKeysCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/keys", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RecaptchaenterpriseProjectsKeysCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudRecaptchaenterpriseV1Key = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * recaptchaenterpriseProjectsKeysDelete - Deletes the specified key.
  **/
  recaptchaenterpriseProjectsKeysDelete(
    req: operations.RecaptchaenterpriseProjectsKeysDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RecaptchaenterpriseProjectsKeysDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RecaptchaenterpriseProjectsKeysDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RecaptchaenterpriseProjectsKeysDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleProtobufEmpty = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * recaptchaenterpriseProjectsKeysGetMetrics - Get some aggregated metrics for a Key. This data can be used to build dashboards.
  **/
  recaptchaenterpriseProjectsKeysGetMetrics(
    req: operations.RecaptchaenterpriseProjectsKeysGetMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RecaptchaenterpriseProjectsKeysGetMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RecaptchaenterpriseProjectsKeysGetMetricsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RecaptchaenterpriseProjectsKeysGetMetricsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudRecaptchaenterpriseV1Metrics = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * recaptchaenterpriseProjectsKeysList - Returns the list of all keys that belong to a project.
  **/
  recaptchaenterpriseProjectsKeysList(
    req: operations.RecaptchaenterpriseProjectsKeysListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RecaptchaenterpriseProjectsKeysListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RecaptchaenterpriseProjectsKeysListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/keys", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RecaptchaenterpriseProjectsKeysListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudRecaptchaenterpriseV1ListKeysResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * recaptchaenterpriseProjectsKeysMigrate - Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
  **/
  recaptchaenterpriseProjectsKeysMigrate(
    req: operations.RecaptchaenterpriseProjectsKeysMigrateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RecaptchaenterpriseProjectsKeysMigrateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RecaptchaenterpriseProjectsKeysMigrateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:migrate", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RecaptchaenterpriseProjectsKeysMigrateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudRecaptchaenterpriseV1Key = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * recaptchaenterpriseProjectsKeysPatch - Updates the specified key.
  **/
  recaptchaenterpriseProjectsKeysPatch(
    req: operations.RecaptchaenterpriseProjectsKeysPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RecaptchaenterpriseProjectsKeysPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RecaptchaenterpriseProjectsKeysPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RecaptchaenterpriseProjectsKeysPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudRecaptchaenterpriseV1Key = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * recaptchaenterpriseProjectsKeysRetrieveLegacySecretKey - Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
  **/
  recaptchaenterpriseProjectsKeysRetrieveLegacySecretKey(
    req: operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{key}:retrieveLegacySecretKey", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * recaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch - Search group memberships related to a given account.
  **/
  recaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch(
    req: operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{project}/relatedaccountgroupmemberships:search", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * recaptchaenterpriseProjectsRelatedaccountgroupsList - List groups of related accounts.
  **/
  recaptchaenterpriseProjectsRelatedaccountgroupsList(
    req: operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/relatedaccountgroups", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * recaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList - Get memberships in a group of related accounts.
  **/
  recaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList(
    req: operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/memberships", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
