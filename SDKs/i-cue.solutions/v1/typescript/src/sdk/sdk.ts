import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://i-cue.solutions",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * deleteAdministrationEntityId - Delete organization
   *
   * This is a iCUE only endpoint or Enterprise feature.
  **/
  deleteAdministrationEntityId(
    req: operations.DeleteAdministrationEntityIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAdministrationEntityIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAdministrationEntityIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/administration/entity/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteAdministrationEntityIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteAdministrationPlanningLevel - Delete planning level
   *
   * Delete planning level. This is an Enterprise feature.
  **/
  deleteAdministrationPlanningLevel(
    req: operations.DeleteAdministrationPlanningLevelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAdministrationPlanningLevelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAdministrationPlanningLevelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/planning-level";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteAdministrationPlanningLevelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteAdministrationUserEntityIdId - Delete user
   *
   * Delete user
  **/
  deleteAdministrationUserEntityIdId(
    req: operations.DeleteAdministrationUserEntityIdIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAdministrationUserEntityIdIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAdministrationUserEntityIdIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/administration/user/{entityId}/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteAdministrationUserEntityIdIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAdministrationEntity - Get all organizations
   *
   * This is a iCUE only endpoint or Enterprise feature.
  **/
  getAdministrationEntity(
    req: operations.GetAdministrationEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAdministrationEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAdministrationEntityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/entity";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAdministrationEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.entities = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.entities = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAdministrationPlanningLevels - Get all planning levels
   *
   * Get all planning levels.
  **/
  getAdministrationPlanningLevels(
    req: operations.GetAdministrationPlanningLevelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAdministrationPlanningLevelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAdministrationPlanningLevelsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/planning-levels";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAdministrationPlanningLevelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.planningLevelInfoResponses = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.planningLevelInfoResponses = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAdministrationUserEntityId - Get all users
   *
   * Get all users
  **/
  getAdministrationUserEntityId(
    req: operations.GetAdministrationUserEntityIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAdministrationUserEntityIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAdministrationUserEntityIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/administration/user/{entityId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAdministrationUserEntityIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getForecastResultJobId - Forecast result
   *
   * Get result for long running forecast job
  **/
  getForecastResultJobId(
    req: operations.GetForecastResultJobIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetForecastResultJobIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetForecastResultJobIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/forecast/result/{jobId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetForecastResultJobIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getForecastStatusJobId - Forecast status
   *
   * Get status for long running forecast job
  **/
  getForecastStatusJobId(
    req: operations.GetForecastStatusJobIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetForecastStatusJobIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetForecastStatusJobIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/forecast/status/{jobId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetForecastStatusJobIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getHyperparameter - Get hyperparameters
   *
   * Get entity global hyperparameters.
  **/
  getHyperparameter(
    req: operations.GetHyperparameterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHyperparameterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHyperparameterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/hyperparameter";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetHyperparameterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hyperparameterModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.hyperparameterModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getReportPerformancePlanningLevelId - Month over month performance per planning level
   *
   * Month over month performance per planning level
  **/
  getReportPerformancePlanningLevelId(
    req: operations.GetReportPerformancePlanningLevelIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReportPerformancePlanningLevelIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReportPerformancePlanningLevelIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/report/performance/{planningLevelId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetReportPerformancePlanningLevelIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getReportPerformanceSkuRationalizationPlanningLevelId - SKU rationalization report
   *
   * SKU rationalization report
  **/
  getReportPerformanceSkuRationalizationPlanningLevelId(
    req: operations.GetReportPerformanceSkuRationalizationPlanningLevelIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReportPerformanceSkuRationalizationPlanningLevelIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReportPerformanceSkuRationalizationPlanningLevelIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/report/performance/sku-rationalization/{planningLevelId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetReportPerformanceSkuRationalizationPlanningLevelIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.portfolioModels = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.portfolioModels = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getReportPlanningLevelOrganization - Get list of plannign levels by organization
   *
   * Get list of plannign levels by organization
  **/
  getReportPlanningLevelOrganization(
    req: operations.GetReportPlanningLevelOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReportPlanningLevelOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReportPlanningLevelOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/report/planning-level/organization";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetReportPlanningLevelOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getReportPlanningLevelUser - Get list of plannign levels by user
   *
   * Get list of plannign levels by user
  **/
  getReportPlanningLevelUser(
    req: operations.GetReportPlanningLevelUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReportPlanningLevelUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReportPlanningLevelUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/report/planning-level/user";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetReportPlanningLevelUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getReportUser - Get usage statistics per user
   *
   * Get usage statistics per user
  **/
  getReportUser(
    req: operations.GetReportUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReportUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReportUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/report/user";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetReportUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAdministrationEntity - Create organization
   *
   * This is a iCUE only endpoint or Enterprise feature.
  **/
  postAdministrationEntity(
    req: operations.PostAdministrationEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAdministrationEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAdministrationEntityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/entity";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAdministrationEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAdministrationEntity200ApplicationJsonUuidString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.postAdministrationEntity200TextJsonUuidString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.postAdministrationEntity200TextPlainUuidString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAdministrationPlanningLevelLock - Lock planning level
   *
   * Lock planning level against modification. This is an Enterprise feature.
  **/
  postAdministrationPlanningLevelLock(
    req: operations.PostAdministrationPlanningLevelLockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAdministrationPlanningLevelLockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAdministrationPlanningLevelLockRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/planning-level/lock";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAdministrationPlanningLevelLockResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAdministrationToken - Issue a token
   *
   * This is a iCUE only endpoint.
  **/
  postAdministrationToken(
    req: operations.PostAdministrationTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAdministrationTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAdministrationTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/token";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAdministrationTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAdministrationToken200ApplicationJsonUuidString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.postAdministrationToken200TextJsonUuidString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.postAdministrationToken200TextPlainUuidString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAdministrationUser - Create user
   *
   * Create new user for entity/organization. This can be done by entity administrator.
  **/
  postAdministrationUser(
    req: operations.PostAdministrationUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAdministrationUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAdministrationUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/user";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAdministrationUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAdministrationUser200ApplicationJsonUuidString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.postAdministrationUser200TextJsonUuidString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.postAdministrationUser200TextPlainUuidString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postForecast - Forecasts only, for faster results
   *
   * To support maximum operation and integration speed, this endpoint only returns the calculated forecast.
  **/
  postForecast(
    req: operations.PostForecastRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostForecastResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.forecastResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.forecastResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postForecastAi - Forecast utilizing advanced machine learning models
   *
   * Forecast utilizing Facebookm Prophet, UBER Orbit, amongst other advanced machine learning models. Please be mindful of enhanced execution times (~2s per timeseries).
  **/
  postForecastAi(
    req: operations.PostForecastAiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastAiResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastAiRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast/AI";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostForecastAiResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.forecastResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.forecastResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postForecastAiHistoryAndForecast - History and forecast utilizing advanced machine learning models
   *
   * History and forecast utilizing Facebookm Prophet, UBER Orbit, amongst other advanced machine learning models. Please be mindful of enhanced execution times (~2s per timeseries).
  **/
  postForecastAiHistoryAndForecast(
    req: operations.PostForecastAiHistoryAndForecastRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastAiHistoryAndForecastResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastAiHistoryAndForecastRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast/AI/history-and-forecast";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostForecastAiHistoryAndForecastResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.historyAndForecastResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.historyAndForecastResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postForecastForecastBottomUp - Bottom up forecasting
   *
   * Calculate forecast bny timeseries and sum results up to establish forecast for top level timeseries.
  **/
  postForecastForecastBottomUp(
    req: operations.PostForecastForecastBottomUpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastForecastBottomUpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastForecastBottomUpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast/forecast-bottom-up";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostForecastForecastBottomUpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.forecastBottomUpResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.forecastBottomUpResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postForecastForecastTopDown - Top down forecasting
   *
   * Calculate forecast based on sum of of lower level timeseries and distribute forecast down based on ratios. Great feature for planning levels with dynamic timeseries.
  **/
  postForecastForecastTopDown(
    req: operations.PostForecastForecastTopDownRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastForecastTopDownResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastForecastTopDownRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast/forecast-top-down";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostForecastForecastTopDownResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postForecastFullDetail - Full forecast result details, including error, trend seasonality and outlier
   *
   * Response provides full forecast result details, including error, trend seasonality and outlier. Great for advanced analysis.
  **/
  postForecastFullDetail(
    req: operations.PostForecastFullDetailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastFullDetailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastFullDetailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast/full-detail";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostForecastFullDetailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fullDetailsForecastResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.fullDetailsForecastResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postForecastHistoryAndForecast - History and forecast for fast timeseries view
   *
   * Reponse provides history and forecast per timeseries. Great for visualizing results.
  **/
  postForecastHistoryAndForecast(
    req: operations.PostForecastHistoryAndForecastRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastHistoryAndForecastResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastHistoryAndForecastRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast/history-and-forecast";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostForecastHistoryAndForecastResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.historyAndForecastResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.historyAndForecastResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postForecastOptimalParameter - Get optimal parameter per method
   *
   * Use the optimal parameter sets created by iCUE to set the method parameters of the internal planning system.
  **/
  postForecastOptimalParameter(
    req: operations.PostForecastOptimalParameterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastOptimalParameterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastOptimalParameterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast/optimal-parameter";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostForecastOptimalParameterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.optimalParameterResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.optimalParameterResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postForecastRerun - Rerun previously uploaded planning level
   *
   * Rerun previously uploaded planning level.
  **/
  postForecastRerun(
    req: operations.PostForecastRerunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastRerunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastRerunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast/rerun";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostForecastRerunResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.forecastResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.forecastResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postHyperparameter - Set hyperparameters
   *
   * Set entity global hyperparameters. Hyperparameters can be overwritten by user and planning level (add to JSON body).
  **/
  postHyperparameter(
    req: operations.PostHyperparameterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostHyperparameterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostHyperparameterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/hyperparameter";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostHyperparameterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInventoryAmazonIpi - Calculate Amazon Inventory Performance Index (IPI)
   *
   * Calculate Amazon Inventory Performance Index (IPI)
  **/
  postInventoryAmazonIpi(
    req: operations.PostInventoryAmazonIpiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryAmazonIpiResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryAmazonIpiRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/amazon-ipi";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInventoryAmazonIpiResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInventoryCaryyingCost - Carrying Cost
   *
   * Carrying Cost
  **/
  postInventoryCaryyingCost(
    req: operations.PostInventoryCaryyingCostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryCaryyingCostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryCaryyingCostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/caryying-cost";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInventoryCaryyingCostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInventoryEoq - Calculate economic order quantity
   *
   * Calculate economic order quantity
  **/
  postInventoryEoq(
    req: operations.PostInventoryEoqRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryEoqResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryEoqRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/eoq";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInventoryEoqResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInventoryFillRate - Calculate fill rate
   *
   * Calculate fill rate
  **/
  postInventoryFillRate(
    req: operations.PostInventoryFillRateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryFillRateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryFillRateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/fill-rate";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInventoryFillRateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInventoryFinancialImapctForecastAccuracy - Calculate financial impact of forecast accuracy
   *
   * Calculate financial impact of forecast accuracy
  **/
  postInventoryFinancialImapctForecastAccuracy(
    req: operations.PostInventoryFinancialImapctForecastAccuracyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryFinancialImapctForecastAccuracyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryFinancialImapctForecastAccuracyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/financial-imapct-forecast-accuracy";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInventoryFinancialImapctForecastAccuracyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInventoryInventoryTurnover - Inventroy Turn-over
   *
   * Inventroy Turn-over
  **/
  postInventoryInventoryTurnover(
    req: operations.PostInventoryInventoryTurnoverRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryInventoryTurnoverResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryInventoryTurnoverRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/inventory-turnover";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInventoryInventoryTurnoverResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInventoryLtd - Calculate lead time demand
   *
   * Calculate lead time demand
  **/
  postInventoryLtd(
    req: operations.PostInventoryLtdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryLtdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryLtdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/ltd";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInventoryLtdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInventoryMoq - Calculate minimum order quantity
   *
   * Calculate minimum order quantity
  **/
  postInventoryMoq(
    req: operations.PostInventoryMoqRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryMoqResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryMoqRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/moq";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInventoryMoqResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInventoryOptimalServiceLevel - Calculate optimal service level
   *
   * Calculate optimal service level
  **/
  postInventoryOptimalServiceLevel(
    req: operations.PostInventoryOptimalServiceLevelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryOptimalServiceLevelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryOptimalServiceLevelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/optimal-service-level";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInventoryOptimalServiceLevelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInventoryReorderPoint - Re-order Point
   *
   * Re-order Point
  **/
  postInventoryReorderPoint(
    req: operations.PostInventoryReorderPointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryReorderPointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryReorderPointRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/reorder-point";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInventoryReorderPointResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInventorySafetyStock - Safety Stock
   *
   * Safety Stock
  **/
  postInventorySafetyStock(
    req: operations.PostInventorySafetyStockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventorySafetyStockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventorySafetyStockRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/safety-stock";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInventorySafetyStockResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInventoryServiceLevel - Calculate service level
   *
   * Calculate service level
  **/
  postInventoryServiceLevel(
    req: operations.PostInventoryServiceLevelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryServiceLevelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryServiceLevelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/service-level";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInventoryServiceLevelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInventoryTurns - Calculate inventory turns
   *
   * Calculate inventory turns
  **/
  postInventoryTurns(
    req: operations.PostInventoryTurnsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryTurnsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryTurnsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/turns";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInventoryTurnsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLifecycleManyToOne - Map from old product to new product to create artifical history
   *
   * Supports the creation of artificial startup history for new products, based on a flexible mapping of old to new. This is an Enterprise feature.
  **/
  postLifecycleManyToOne(
    req: operations.PostLifecycleManyToOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLifecycleManyToOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLifecycleManyToOneRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/lifecycle/many-to-one";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostLifecycleManyToOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.planningLevelDataDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.planningLevelDataDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLifecycleOneToOne - Map from old product to new product to create artifical history
   *
   * Supports the creation of artificial startup history for new products, based on a flexible mapping of old to new. This is an Enterprise feature.
  **/
  postLifecycleOneToOne(
    req: operations.PostLifecycleOneToOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLifecycleOneToOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLifecycleOneToOneRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/lifecycle/one-to-one";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostLifecycleOneToOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.planningLevelDataDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.planningLevelDataDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postOutlier - Get outlier
   *
   * Identify outliers (single and repetitive spikes, seasonality, masked outliers, trend and level jumps, amongst other topics) and use for cleansing of the history stream prior to forecast claculation. Depending on math model used, this approach often improves results dramatically, as it removes disturbances.
  **/
  postOutlier(
    req: operations.PostOutlierRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOutlierResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOutlierRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/outlier";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostOutlierResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.timeSeriesOutliersResponses = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.timeSeriesOutliersResponses = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolio - ABCxyz Analysis
   *
   * Calculate and retrieve results of ABC (pareto analysis) and xyz (Coefficient of variation) per timeseries and planning level. This analysis is a powerful means to estbalish a proper planning cadence, best accuracy messures and optimal hyperparameters for the organization. It provides a balanced and actionable overview of the entire product portfolio.
  **/
  postPortfolio(
    req: operations.PostPortfolioRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.portfolioModels = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.portfolioModels = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioAbc - ABC Analysis
   *
   * Calculate and retrieve results of ABC (pareto analysis) per timeseries and planning level.
  **/
  postPortfolioAbc(
    req: operations.PostPortfolioAbcRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioAbcResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioAbcRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/abc";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioAbcResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.portfolioAbcModels = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.portfolioAbcModels = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioForecastPerformanceRewind - Planning level rewind to calculate and measure performance potential (internal versus iCUE).
   *
   * Planning level rewind to calculate and measure performance potential (internal versus iCUE).
  **/
  postPortfolioForecastPerformanceRewind(
    req: operations.PostPortfolioForecastPerformanceRewindRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioForecastPerformanceRewindResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioForecastPerformanceRewindRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/forecast-performance-rewind";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioForecastPerformanceRewindResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.rewindResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.rewindResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioXyz - xyz Analysis
   *
   * Calculate and retrieve results of xyz (Coefficient of variation) per timeseries and planning level.
  **/
  postPortfolioXyz(
    req: operations.PostPortfolioXyzRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioXyzResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioXyzRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/xyz";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioXyzResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.portfolioXyzModels = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.portfolioXyzModels = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPricingBundlePricing - Bundle pricing
   *
   * Bundle pricing
  **/
  postPricingBundlePricing(
    req: operations.PostPricingBundlePricingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPricingBundlePricingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPricingBundlePricingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pricing/bundle-pricing";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPricingBundlePricingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postPricingCompetitivePricing(
    req: operations.PostPricingCompetitivePricingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPricingCompetitivePricingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPricingCompetitivePricingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pricing/competitive-pricing";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPricingCompetitivePricingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postPricingCostPlusPricing(
    req: operations.PostPricingCostPlusPricingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPricingCostPlusPricingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPricingCostPlusPricingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pricing/cost-plus-pricing";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPricingCostPlusPricingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postPricingDecoyPricing(
    req: operations.PostPricingDecoyPricingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPricingDecoyPricingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPricingDecoyPricingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pricing/decoy-pricing";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPricingDecoyPricingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postPricingOddPricing(
    req: operations.PostPricingOddPricingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPricingOddPricingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPricingOddPricingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pricing/odd-pricing";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPricingOddPricingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postPricingPenetrationPricing(
    req: operations.PostPricingPenetrationPricingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPricingPenetrationPricingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPricingPenetrationPricingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pricing/penetration-pricing";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPricingPenetrationPricingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postPricingPriceElasticityOfDemand(
    req: operations.PostPricingPriceElasticityOfDemandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPricingPriceElasticityOfDemandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPricingPriceElasticityOfDemandRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pricing/price-elasticity-of-demand";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPricingPriceElasticityOfDemandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putAdministrationEntity - Pause organization
   *
   * This is a iCUE only endpoint or Enterprise feature.
  **/
  putAdministrationEntity(
    req: operations.PutAdministrationEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutAdministrationEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutAdministrationEntityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/entity";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutAdministrationEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putAdministrationUser - Update user
   *
   * Update user
  **/
  putAdministrationUser(
    req: operations.PutAdministrationUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutAdministrationUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutAdministrationUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/user";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutAdministrationUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putAdministrationUserLock - Lock user
   *
   * After lock user won't be able to use iCUE API endpoints.
  **/
  putAdministrationUserLock(
    req: operations.PutAdministrationUserLockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutAdministrationUserLockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutAdministrationUserLockRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/user/lock";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutAdministrationUserLockResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
