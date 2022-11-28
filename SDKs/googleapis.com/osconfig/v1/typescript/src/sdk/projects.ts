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
   * osconfigProjectsLocationsInstancesInventoriesList - List inventory data for all VM instances in the specified zone.
  **/
  osconfigProjectsLocationsInstancesInventoriesList(
    req: operations.OsconfigProjectsLocationsInstancesInventoriesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OsconfigProjectsLocationsInstancesInventoriesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OsconfigProjectsLocationsInstancesInventoriesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/inventories", req.pathParams);
    
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
        const res: operations.OsconfigProjectsLocationsInstancesInventoriesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listInventoriesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList - List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
  **/
  osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList(
    req: operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/reports", req.pathParams);
    
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
        const res: operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listOsPolicyAssignmentReportsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * osconfigProjectsLocationsInstancesVulnerabilityReportsList - List vulnerability reports for all VM instances in the specified zone.
  **/
  osconfigProjectsLocationsInstancesVulnerabilityReportsList(
    req: operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/vulnerabilityReports", req.pathParams);
    
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
        const res: operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listVulnerabilityReportsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * osconfigProjectsLocationsOsPolicyAssignmentsCreate - Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).
  **/
  osconfigProjectsLocationsOsPolicyAssignmentsCreate(
    req: operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/osPolicyAssignments", req.pathParams);

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
        const res: operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * osconfigProjectsLocationsOsPolicyAssignmentsList - List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
  **/
  osconfigProjectsLocationsOsPolicyAssignmentsList(
    req: operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OsconfigProjectsLocationsOsPolicyAssignmentsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/osPolicyAssignments", req.pathParams);
    
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
        const res: operations.OsconfigProjectsLocationsOsPolicyAssignmentsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listOsPolicyAssignmentsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * osconfigProjectsLocationsOsPolicyAssignmentsListRevisions - List the OS policy assignment revisions for a given OS policy assignment.
  **/
  osconfigProjectsLocationsOsPolicyAssignmentsListRevisions(
    req: operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:listRevisions", req.pathParams);
    
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
        const res: operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listOsPolicyAssignmentRevisionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * osconfigProjectsPatchDeploymentsCreate - Create an OS Config patch deployment.
  **/
  osconfigProjectsPatchDeploymentsCreate(
    req: operations.OsconfigProjectsPatchDeploymentsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OsconfigProjectsPatchDeploymentsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OsconfigProjectsPatchDeploymentsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/patchDeployments", req.pathParams);

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
        const res: operations.OsconfigProjectsPatchDeploymentsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.patchDeployment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * osconfigProjectsPatchDeploymentsDelete - Delete an OS Config patch deployment.
  **/
  osconfigProjectsPatchDeploymentsDelete(
    req: operations.OsconfigProjectsPatchDeploymentsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OsconfigProjectsPatchDeploymentsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OsconfigProjectsPatchDeploymentsDeleteRequest(req);
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
        const res: operations.OsconfigProjectsPatchDeploymentsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * osconfigProjectsPatchDeploymentsList - Get a page of OS Config patch deployments.
  **/
  osconfigProjectsPatchDeploymentsList(
    req: operations.OsconfigProjectsPatchDeploymentsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OsconfigProjectsPatchDeploymentsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OsconfigProjectsPatchDeploymentsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/patchDeployments", req.pathParams);
    
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
        const res: operations.OsconfigProjectsPatchDeploymentsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listPatchDeploymentsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * osconfigProjectsPatchDeploymentsPatch - Update an OS Config patch deployment.
  **/
  osconfigProjectsPatchDeploymentsPatch(
    req: operations.OsconfigProjectsPatchDeploymentsPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OsconfigProjectsPatchDeploymentsPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OsconfigProjectsPatchDeploymentsPatchRequest(req);
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
        const res: operations.OsconfigProjectsPatchDeploymentsPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.patchDeployment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * osconfigProjectsPatchDeploymentsPause - Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
  **/
  osconfigProjectsPatchDeploymentsPause(
    req: operations.OsconfigProjectsPatchDeploymentsPauseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OsconfigProjectsPatchDeploymentsPauseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OsconfigProjectsPatchDeploymentsPauseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:pause", req.pathParams);

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
        const res: operations.OsconfigProjectsPatchDeploymentsPauseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.patchDeployment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * osconfigProjectsPatchDeploymentsResume - Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
  **/
  osconfigProjectsPatchDeploymentsResume(
    req: operations.OsconfigProjectsPatchDeploymentsResumeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OsconfigProjectsPatchDeploymentsResumeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OsconfigProjectsPatchDeploymentsResumeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:resume", req.pathParams);

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
        const res: operations.OsconfigProjectsPatchDeploymentsResumeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.patchDeployment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * osconfigProjectsPatchJobsCancel - Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
  **/
  osconfigProjectsPatchJobsCancel(
    req: operations.OsconfigProjectsPatchJobsCancelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OsconfigProjectsPatchJobsCancelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OsconfigProjectsPatchJobsCancelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:cancel", req.pathParams);

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
        const res: operations.OsconfigProjectsPatchJobsCancelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.patchJob = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * osconfigProjectsPatchJobsExecute - Patch VM instances by creating and running a patch job.
  **/
  osconfigProjectsPatchJobsExecute(
    req: operations.OsconfigProjectsPatchJobsExecuteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OsconfigProjectsPatchJobsExecuteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OsconfigProjectsPatchJobsExecuteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/patchJobs:execute", req.pathParams);

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
        const res: operations.OsconfigProjectsPatchJobsExecuteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.patchJob = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * osconfigProjectsPatchJobsGet - Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
  **/
  osconfigProjectsPatchJobsGet(
    req: operations.OsconfigProjectsPatchJobsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OsconfigProjectsPatchJobsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OsconfigProjectsPatchJobsGetRequest(req);
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
        const res: operations.OsconfigProjectsPatchJobsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.patchJob = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * osconfigProjectsPatchJobsInstanceDetailsList - Get a list of instance details for a given patch job.
  **/
  osconfigProjectsPatchJobsInstanceDetailsList(
    req: operations.OsconfigProjectsPatchJobsInstanceDetailsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OsconfigProjectsPatchJobsInstanceDetailsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OsconfigProjectsPatchJobsInstanceDetailsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/instanceDetails", req.pathParams);
    
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
        const res: operations.OsconfigProjectsPatchJobsInstanceDetailsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listPatchJobInstanceDetailsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * osconfigProjectsPatchJobsList - Get a list of patch jobs.
  **/
  osconfigProjectsPatchJobsList(
    req: operations.OsconfigProjectsPatchJobsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OsconfigProjectsPatchJobsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OsconfigProjectsPatchJobsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/patchJobs", req.pathParams);
    
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
        const res: operations.OsconfigProjectsPatchJobsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listPatchJobsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
