import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://api.logoraisr.com/rest-v1",
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

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
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
  
  // PreviewsRead - Get preview image of uploaded file
  /** 
   * This GET-Method returns the URL where the preview image of uploaded file can downloaded from.
  **/
  PreviewsRead(
    req: operations.PreviewsReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreviewsReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreviewsReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/previews/{file_id}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PreviewsReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.previewResponse = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProcessesList - Get process list.
  /** 
   * This GET-Method lists all on logoraisr available processes.
  **/
  ProcessesList(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ProcessesListResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/processes/";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProcessesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.process = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProjectsCreate - Create a new project.
  /** 
   * This POST-Method creates a new project.
  **/
  ProjectsCreate(
    req: operations.ProjectsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectsCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/projects/";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProjectsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.projectResponse = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProjectsList - Get user project list.
  /** 
   * This GET-Method lists the user's projects.
  **/
  ProjectsList(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectsListResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/projects/";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProjectsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
            }
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProjectsRead - Get project details.
  /** 
   * This GET-Method returns a specific project.
  **/
  ProjectsRead(
    req: operations.ProjectsReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProjectsReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProjectsReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/projects/{project_number}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProjectsReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
            }
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportsCreate - Create a new report.
  /** 
   * This POST-Method creates a new report.
  **/
  ReportsCreate(
    req: operations.ReportsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportsCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/reports/";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReportsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.reportResponse = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportsList - Get user report list.
  /** 
   * This GET method lists the user's reports.
  **/
  ReportsList(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ReportsListResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/reports/";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReportsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.report = httpRes?.data;
            }
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportsRead - Get report details.
  /** 
   * This GET-Method returns the details of a specific report.
  **/
  ReportsRead(
    req: operations.ReportsReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportsReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportsReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/reports/{report_number}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReportsReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.report = httpRes?.data;
            }
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ResultsRead - Get the result from image processing
  /** 
   * This GET-Method returns the URL where the result can downloaded from.
  **/
  ResultsRead(
    req: operations.ResultsReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ResultsReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ResultsReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/results/{result_file_id}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ResultsReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.resultResponse = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UploadsCreate - Upload a new image
  /** 
   * This POST-Method uploads a new file on the server.
  **/
  UploadsCreate(
    req: operations.UploadsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UploadsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UploadsCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/uploads/";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UploadsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileResponse = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
