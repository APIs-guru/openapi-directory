import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://osdb.openlinksw.com/osdb",
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
   * actionHelp - Action help
   *
   * Returns the help text for a given service action
  **/
  actionHelp(
    req: operations.ActionHelpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionHelpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionHelpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/actions/{serviceId}/{actionId}/help", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionHelpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionHelpResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * describeAction - Describe action
   *
   * Returns a description of a given service action.
  **/
  describeAction(
    req: operations.DescribeActionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribeActionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribeActionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/actions/{serviceId}/{actionId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DescribeActionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.describeActionResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * describeService - Describe service
   *
   * Returns a description of a given service
  **/
  describeService(
    req: operations.DescribeServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribeServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribeServiceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/services/{serviceId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DescribeServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.describeServiceResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * executeAction - Execute action
   *
   * Executes a registered service action and returns any output from the action.
   * The data returned in the POST response body may be: 
   * * the raw action output, 
   * * a URL encapsulating the action request which executes the action when dereferenced  (only for actions using GET), 
   * * RDF generated from the action output,
   * * a URL to an RDF viewer's display of the generated RDF.
   * 
   * Any parameters required by the action are supplied as a JSON object in the POST body. The parameter types supported are: "query", "header", "uri", "path" and "body".  The parameter type determines where a supplied parameter value is inserted into the HTTP request constructed by OSDB to invoke the target service action. In addition to native parameters required by the service action, 'Execute action' accepts some OSDB-specific parameters.<br/><br/>
   * 
   * **Examples**
   * * ```curl -ik -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec```  
   * * ```curl -ikL -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"generate_rdf", "osdb:response_format":"application/rdf+xml" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec``` 
   * * ```curl -ikL -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"display_rdf" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec``` 
   * * ```curl -ik -X POST -d '{ "q":"skiing", "osdb:response_format": "application/rdf+xml" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec``` 
   * * ```curl -ik -X POST -d '{ "q":"skiing", "osdb:output_type": "url_only" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec``` 
   * * ```curl -ik -X POST -d '{ "Content-Location": "http://demo.openlinksw.co.uk/pubs", "osdb:body_data_src_url": "http://ods-qa.openlinksw.com/DAV/home/osdb/pubs.csv", "extractor": "csv", "osdb:response_format": "application/rdf+xml", "osdb:body_data_encoding": "text/csv" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/csv_transformer/transform/exec```
  **/
  executeAction(
    req: operations.ExecuteActionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ExecuteActionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ExecuteActionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/actions/{serviceId}/{actionId}/exec", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.ExecuteActionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listActions - List actions
   *
   * Returns an array of action descriptions for the actions supported by the given service
  **/
  listActions(
    req: operations.ListActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListActionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/actions/{serviceId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listActionsResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listServices - List services
   *
   * Returns descriptions of all services registered with the OSDB server.
  **/
  listServices(
    config?: AxiosRequestConfig
  ): Promise<operations.ListServicesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/services";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListServicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listServicesResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * loadService - Load service
   *
   * Loads a service description into the OSDB Service Registry
  **/
  loadService(
    req: operations.LoadServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LoadServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LoadServiceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/services";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.LoadServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.loadService200ApplicationJsonObject = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * login - Login
   *
   * Logs a user into the OSDB server, authenticating them by their WebID and returning an OSDB session ID in cookie osdb.sid
  **/
  login(
    config?: AxiosRequestConfig
  ): Promise<operations.LoginResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/login";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LoginResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.loginResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * logout - Logout
   *
   * Logs a user out of the OSDB server, ending their OSDB session
  **/
  logout(
    config?: AxiosRequestConfig
  ): Promise<operations.LogoutResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/logout";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LogoutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.logoutResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * unloadService - Unload service
   *
   * Removes a service description from the OSDB Service Registry
  **/
  unloadService(
    req: operations.UnloadServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UnloadServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UnloadServiceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/services/{serviceId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UnloadServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unloadService200ApplicationJsonObject = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
