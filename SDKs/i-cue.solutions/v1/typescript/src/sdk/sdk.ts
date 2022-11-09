import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
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
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}


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
  
  // DeleteAdministrationEntityId - Delete organization
  /** 
   * This is a iCUE only endpoint or Enterprise feature.
  **/
  DeleteAdministrationEntityId(
    req: operations.DeleteAdministrationEntityIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAdministrationEntityIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAdministrationEntityIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/administration/entity/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAdministrationEntityIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteAdministrationPlanningLevel - Delete planning level
  /** 
   * Delete planning level. This is an Enterprise feature.
  **/
  DeleteAdministrationPlanningLevel(
    req: operations.DeleteAdministrationPlanningLevelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAdministrationPlanningLevelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAdministrationPlanningLevelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/planning-level";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAdministrationPlanningLevelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteAdministrationUserEntityIdId - Delete user
  /** 
   * Delete user
  **/
  DeleteAdministrationUserEntityIdId(
    req: operations.DeleteAdministrationUserEntityIdIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAdministrationUserEntityIdIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAdministrationUserEntityIdIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/administration/user/{entityId}/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAdministrationUserEntityIdIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAdministrationEntity - Get all organizations
  /** 
   * This is a iCUE only endpoint or Enterprise feature.
  **/
  GetAdministrationEntity(
    req: operations.GetAdministrationEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAdministrationEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAdministrationEntityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/entity";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAdministrationEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.entities = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.entities = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // GetAdministrationPlanningLevels - Get all planning levels
  /** 
   * Get all planning levels.
  **/
  GetAdministrationPlanningLevels(
    req: operations.GetAdministrationPlanningLevelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAdministrationPlanningLevelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAdministrationPlanningLevelsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/planning-levels";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAdministrationPlanningLevelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.planningLevelInfoResponses = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.planningLevelInfoResponses = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // GetAdministrationUserEntityId - Get all users
  /** 
   * Get all users
  **/
  GetAdministrationUserEntityId(
    req: operations.GetAdministrationUserEntityIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAdministrationUserEntityIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAdministrationUserEntityIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/administration/user/{entityId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAdministrationUserEntityIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetForecastResultJobId - Forecast result
  /** 
   * Get result for long running forecast job
  **/
  GetForecastResultJobId(
    req: operations.GetForecastResultJobIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetForecastResultJobIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetForecastResultJobIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/forecast/result/{jobId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetForecastResultJobIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetForecastStatusJobId - Forecast status
  /** 
   * Get status for long running forecast job
  **/
  GetForecastStatusJobId(
    req: operations.GetForecastStatusJobIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetForecastStatusJobIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetForecastStatusJobIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/forecast/status/{jobId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetForecastStatusJobIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetHyperparameter - Get hyperparameters
  /** 
   * Get entity global hyperparameters.
  **/
  GetHyperparameter(
    req: operations.GetHyperparameterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHyperparameterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHyperparameterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/hyperparameter";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetHyperparameterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.hyperparameterModel = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.hyperparameterModel = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // GetReportPerformancePlanningLevelId - Month over month performance per planning level
  /** 
   * Month over month performance per planning level
  **/
  GetReportPerformancePlanningLevelId(
    req: operations.GetReportPerformancePlanningLevelIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReportPerformancePlanningLevelIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReportPerformancePlanningLevelIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/report/performance/{planningLevelId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetReportPerformancePlanningLevelIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetReportPerformanceSkuRationalizationPlanningLevelId - SKU rationalization report
  /** 
   * SKU rationalization report
  **/
  GetReportPerformanceSkuRationalizationPlanningLevelId(
    req: operations.GetReportPerformanceSkuRationalizationPlanningLevelIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReportPerformanceSkuRationalizationPlanningLevelIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReportPerformanceSkuRationalizationPlanningLevelIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/report/performance/sku-rationalization/{planningLevelId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetReportPerformanceSkuRationalizationPlanningLevelIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.portfolioModels = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.portfolioModels = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // GetReportPlanningLevelOrganization - Get list of plannign levels by organization
  /** 
   * Get list of plannign levels by organization
  **/
  GetReportPlanningLevelOrganization(
    req: operations.GetReportPlanningLevelOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReportPlanningLevelOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReportPlanningLevelOrganizationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/report/planning-level/organization";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetReportPlanningLevelOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetReportPlanningLevelUser - Get list of plannign levels by user
  /** 
   * Get list of plannign levels by user
  **/
  GetReportPlanningLevelUser(
    req: operations.GetReportPlanningLevelUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReportPlanningLevelUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReportPlanningLevelUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/report/planning-level/user";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetReportPlanningLevelUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetReportUser - Get usage statistics per user
  /** 
   * Get usage statistics per user
  **/
  GetReportUser(
    req: operations.GetReportUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReportUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReportUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/report/user";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetReportUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAdministrationEntity - Create organization
  /** 
   * This is a iCUE only endpoint or Enterprise feature.
  **/
  PostAdministrationEntity(
    req: operations.PostAdministrationEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAdministrationEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAdministrationEntityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/entity";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAdministrationEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.postAdministrationEntity200ApplicationJsonUuidString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.postAdministrationEntity200TextJsonUuidString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/plain`)) {
                res.postAdministrationEntity200TextPlainUuidString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAdministrationPlanningLevelLock - Lock planning level
  /** 
   * Lock planning level against modification. This is an Enterprise feature.
  **/
  PostAdministrationPlanningLevelLock(
    req: operations.PostAdministrationPlanningLevelLockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAdministrationPlanningLevelLockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAdministrationPlanningLevelLockRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/planning-level/lock";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAdministrationPlanningLevelLockResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAdministrationToken - Issue a token
  /** 
   * This is a iCUE only endpoint.
  **/
  PostAdministrationToken(
    req: operations.PostAdministrationTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAdministrationTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAdministrationTokenRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/token";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAdministrationTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.postAdministrationToken200ApplicationJsonUuidString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.postAdministrationToken200TextJsonUuidString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/plain`)) {
                res.postAdministrationToken200TextPlainUuidString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAdministrationUser - Create user
  /** 
   * Create new user for entity/organization. This can be done by entity administrator.
  **/
  PostAdministrationUser(
    req: operations.PostAdministrationUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAdministrationUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAdministrationUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/user";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAdministrationUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.postAdministrationUser200ApplicationJsonUuidString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.postAdministrationUser200TextJsonUuidString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/plain`)) {
                res.postAdministrationUser200TextPlainUuidString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostForecast - Forecasts only, for faster results
  /** 
   * To support maximum operation and integration speed, this endpoint only returns the calculated forecast.
  **/
  PostForecast(
    req: operations.PostForecastRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostForecastResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.forecastResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.forecastResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostForecastAi - Forecast utilizing advanced machine learning models
  /** 
   * Forecast utilizing Facebookm Prophet, UBER Orbit, amongst other advanced machine learning models. Please be mindful of enhanced execution times (~2s per timeseries).
  **/
  PostForecastAi(
    req: operations.PostForecastAiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastAiResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastAiRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast/AI";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostForecastAiResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.forecastResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.forecastResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostForecastAiHistoryAndForecast - History and forecast utilizing advanced machine learning models
  /** 
   * History and forecast utilizing Facebookm Prophet, UBER Orbit, amongst other advanced machine learning models. Please be mindful of enhanced execution times (~2s per timeseries).
  **/
  PostForecastAiHistoryAndForecast(
    req: operations.PostForecastAiHistoryAndForecastRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastAiHistoryAndForecastResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastAiHistoryAndForecastRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast/AI/history-and-forecast";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostForecastAiHistoryAndForecastResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.historyAndForecastResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.historyAndForecastResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostForecastForecastBottomUp - Bottom up forecasting
  /** 
   * Calculate forecast bny timeseries and sum results up to establish forecast for top level timeseries.
  **/
  PostForecastForecastBottomUp(
    req: operations.PostForecastForecastBottomUpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastForecastBottomUpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastForecastBottomUpRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast/forecast-bottom-up";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostForecastForecastBottomUpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.forecastBottomUpResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.forecastBottomUpResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostForecastForecastTopDown - Top down forecasting
  /** 
   * Calculate forecast based on sum of of lower level timeseries and distribute forecast down based on ratios. Great feature for planning levels with dynamic timeseries.
  **/
  PostForecastForecastTopDown(
    req: operations.PostForecastForecastTopDownRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastForecastTopDownResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastForecastTopDownRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast/forecast-top-down";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostForecastForecastTopDownResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostForecastFullDetail - Full forecast result details, including error, trend seasonality and outlier
  /** 
   * Response provides full forecast result details, including error, trend seasonality and outlier. Great for advanced analysis.
  **/
  PostForecastFullDetail(
    req: operations.PostForecastFullDetailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastFullDetailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastFullDetailRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast/full-detail";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostForecastFullDetailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.fullDetailsForecastResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.fullDetailsForecastResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostForecastHistoryAndForecast - History and forecast for fast timeseries view
  /** 
   * Reponse provides history and forecast per timeseries. Great for visualizing results.
  **/
  PostForecastHistoryAndForecast(
    req: operations.PostForecastHistoryAndForecastRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastHistoryAndForecastResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastHistoryAndForecastRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast/history-and-forecast";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostForecastHistoryAndForecastResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.historyAndForecastResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.historyAndForecastResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostForecastOptimalParameter - Get optimal parameter per method
  /** 
   * Use the optimal parameter sets created by iCUE to set the method parameters of the internal planning system.
  **/
  PostForecastOptimalParameter(
    req: operations.PostForecastOptimalParameterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastOptimalParameterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastOptimalParameterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast/optimal-parameter";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostForecastOptimalParameterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.optimalParameterResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.optimalParameterResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostForecastRerun - Rerun previously uploaded planning level
  /** 
   * Rerun previously uploaded planning level.
  **/
  PostForecastRerun(
    req: operations.PostForecastRerunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostForecastRerunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostForecastRerunRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forecast/rerun";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostForecastRerunResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.forecastResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.forecastResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostHyperparameter - Set hyperparameters
  /** 
   * Set entity global hyperparameters. Hyperparameters can be overwritten by user and planning level (add to JSON body).
  **/
  PostHyperparameter(
    req: operations.PostHyperparameterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostHyperparameterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostHyperparameterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/hyperparameter";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostHyperparameterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostInventoryAmazonIpi - Calculate Amazon Inventory Performance Index (IPI)
  /** 
   * Calculate Amazon Inventory Performance Index (IPI)
  **/
  PostInventoryAmazonIpi(
    req: operations.PostInventoryAmazonIpiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryAmazonIpiResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryAmazonIpiRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/amazon-ipi";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostInventoryAmazonIpiResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostInventoryCaryyingCost - Carrying Cost
  /** 
   * Carrying Cost
  **/
  PostInventoryCaryyingCost(
    req: operations.PostInventoryCaryyingCostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryCaryyingCostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryCaryyingCostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/caryying-cost";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostInventoryCaryyingCostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostInventoryEoq - Calculate economic order quantity
  /** 
   * Calculate economic order quantity
  **/
  PostInventoryEoq(
    req: operations.PostInventoryEoqRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryEoqResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryEoqRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/eoq";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostInventoryEoqResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostInventoryFillRate - Calculate fill rate
  /** 
   * Calculate fill rate
  **/
  PostInventoryFillRate(
    req: operations.PostInventoryFillRateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryFillRateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryFillRateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/fill-rate";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostInventoryFillRateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostInventoryFinancialImapctForecastAccuracy - Calculate financial impact of forecast accuracy
  /** 
   * Calculate financial impact of forecast accuracy
  **/
  PostInventoryFinancialImapctForecastAccuracy(
    req: operations.PostInventoryFinancialImapctForecastAccuracyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryFinancialImapctForecastAccuracyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryFinancialImapctForecastAccuracyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/financial-imapct-forecast-accuracy";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostInventoryFinancialImapctForecastAccuracyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostInventoryInventoryTurnover - Inventroy Turn-over
  /** 
   * Inventroy Turn-over
  **/
  PostInventoryInventoryTurnover(
    req: operations.PostInventoryInventoryTurnoverRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryInventoryTurnoverResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryInventoryTurnoverRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/inventory-turnover";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostInventoryInventoryTurnoverResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostInventoryLtd - Calculate lead time demand
  /** 
   * Calculate lead time demand
  **/
  PostInventoryLtd(
    req: operations.PostInventoryLtdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryLtdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryLtdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/ltd";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostInventoryLtdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostInventoryMoq - Calculate minimum order quantity
  /** 
   * Calculate minimum order quantity
  **/
  PostInventoryMoq(
    req: operations.PostInventoryMoqRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryMoqResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryMoqRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/moq";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostInventoryMoqResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostInventoryOptimalServiceLevel - Calculate optimal service level
  /** 
   * Calculate optimal service level
  **/
  PostInventoryOptimalServiceLevel(
    req: operations.PostInventoryOptimalServiceLevelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryOptimalServiceLevelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryOptimalServiceLevelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/optimal-service-level";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostInventoryOptimalServiceLevelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostInventoryReorderPoint - Re-order Point
  /** 
   * Re-order Point
  **/
  PostInventoryReorderPoint(
    req: operations.PostInventoryReorderPointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryReorderPointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryReorderPointRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/reorder-point";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostInventoryReorderPointResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostInventorySafetyStock - Safety Stock
  /** 
   * Safety Stock
  **/
  PostInventorySafetyStock(
    req: operations.PostInventorySafetyStockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventorySafetyStockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventorySafetyStockRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/safety-stock";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostInventorySafetyStockResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostInventoryServiceLevel - Calculate service level
  /** 
   * Calculate service level
  **/
  PostInventoryServiceLevel(
    req: operations.PostInventoryServiceLevelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryServiceLevelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryServiceLevelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/service-level";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostInventoryServiceLevelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostInventoryTurns - Calculate inventory turns
  /** 
   * Calculate inventory turns
  **/
  PostInventoryTurns(
    req: operations.PostInventoryTurnsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInventoryTurnsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInventoryTurnsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inventory/turns";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostInventoryTurnsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostLifecycleManyToOne - Map from old product to new product to create artifical history
  /** 
   * Supports the creation of artificial startup history for new products, based on a flexible mapping of old to new. This is an Enterprise feature.
  **/
  PostLifecycleManyToOne(
    req: operations.PostLifecycleManyToOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLifecycleManyToOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLifecycleManyToOneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/lifecycle/many-to-one";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostLifecycleManyToOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.planningLevelDataDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.planningLevelDataDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostLifecycleOneToOne - Map from old product to new product to create artifical history
  /** 
   * Supports the creation of artificial startup history for new products, based on a flexible mapping of old to new. This is an Enterprise feature.
  **/
  PostLifecycleOneToOne(
    req: operations.PostLifecycleOneToOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLifecycleOneToOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLifecycleOneToOneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/lifecycle/one-to-one";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostLifecycleOneToOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.planningLevelDataDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.planningLevelDataDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostOutlier - Get outlier
  /** 
   * Identify outliers (single and repetitive spikes, seasonality, masked outliers, trend and level jumps, amongst other topics) and use for cleansing of the history stream prior to forecast claculation. Depending on math model used, this approach often improves results dramatically, as it removes disturbances.
  **/
  PostOutlier(
    req: operations.PostOutlierRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOutlierResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOutlierRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/outlier";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostOutlierResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.timeSeriesOutliersResponses = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.timeSeriesOutliersResponses = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostPortfolio - ABCxyz Analysis
  /** 
   * Calculate and retrieve results of ABC (pareto analysis) and xyz (Coefficient of variation) per timeseries and planning level. This analysis is a powerful means to estbalish a proper planning cadence, best accuracy messures and optimal hyperparameters for the organization. It provides a balanced and actionable overview of the entire product portfolio.
  **/
  PostPortfolio(
    req: operations.PostPortfolioRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPortfolioResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.portfolioModels = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.portfolioModels = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostPortfolioAbc - ABC Analysis
  /** 
   * Calculate and retrieve results of ABC (pareto analysis) per timeseries and planning level.
  **/
  PostPortfolioAbc(
    req: operations.PostPortfolioAbcRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioAbcResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioAbcRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/abc";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPortfolioAbcResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.portfolioAbcModels = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.portfolioAbcModels = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostPortfolioForecastPerformanceRewind - Planning level rewind to calculate and measure performance potential (internal versus iCUE).
  /** 
   * Planning level rewind to calculate and measure performance potential (internal versus iCUE).
  **/
  PostPortfolioForecastPerformanceRewind(
    req: operations.PostPortfolioForecastPerformanceRewindRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioForecastPerformanceRewindResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioForecastPerformanceRewindRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/forecast-performance-rewind";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPortfolioForecastPerformanceRewindResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.rewindResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.rewindResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostPortfolioXyz - xyz Analysis
  /** 
   * Calculate and retrieve results of xyz (Coefficient of variation) per timeseries and planning level.
  **/
  PostPortfolioXyz(
    req: operations.PostPortfolioXyzRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioXyzResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioXyzRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/xyz";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPortfolioXyzResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.portfolioXyzModels = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.portfolioXyzModels = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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

  
  // PostPricingBundlePricing - Bundle pricing
  /** 
   * Bundle pricing
  **/
  PostPricingBundlePricing(
    req: operations.PostPricingBundlePricingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPricingBundlePricingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPricingBundlePricingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pricing/bundle-pricing";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPricingBundlePricingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostPricingCompetitivePricing(
    req: operations.PostPricingCompetitivePricingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPricingCompetitivePricingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPricingCompetitivePricingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pricing/competitive-pricing";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPricingCompetitivePricingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostPricingCostPlusPricing(
    req: operations.PostPricingCostPlusPricingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPricingCostPlusPricingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPricingCostPlusPricingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pricing/cost-plus-pricing";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPricingCostPlusPricingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostPricingDecoyPricing(
    req: operations.PostPricingDecoyPricingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPricingDecoyPricingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPricingDecoyPricingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pricing/decoy-pricing";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPricingDecoyPricingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostPricingOddPricing(
    req: operations.PostPricingOddPricingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPricingOddPricingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPricingOddPricingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pricing/odd-pricing";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPricingOddPricingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostPricingPenetrationPricing(
    req: operations.PostPricingPenetrationPricingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPricingPenetrationPricingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPricingPenetrationPricingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pricing/penetration-pricing";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPricingPenetrationPricingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostPricingPriceElasticityOfDemand(
    req: operations.PostPricingPriceElasticityOfDemandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPricingPriceElasticityOfDemandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPricingPriceElasticityOfDemandRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pricing/price-elasticity-of-demand";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPricingPriceElasticityOfDemandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutAdministrationEntity - Pause organization
  /** 
   * This is a iCUE only endpoint or Enterprise feature.
  **/
  PutAdministrationEntity(
    req: operations.PutAdministrationEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutAdministrationEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutAdministrationEntityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/entity";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutAdministrationEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutAdministrationUser - Update user
  /** 
   * Update user
  **/
  PutAdministrationUser(
    req: operations.PutAdministrationUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutAdministrationUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutAdministrationUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/user";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutAdministrationUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutAdministrationUserLock - Lock user
  /** 
   * After lock user won't be able to use iCUE API endpoints.
  **/
  PutAdministrationUserLock(
    req: operations.PutAdministrationUserLockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutAdministrationUserLockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutAdministrationUserLockRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/administration/user/lock";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutAdministrationUserLockResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
