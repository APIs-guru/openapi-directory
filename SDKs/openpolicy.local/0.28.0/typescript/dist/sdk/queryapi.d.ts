import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class QueryApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getQuery - Execute an ad-hoc query (simple)
     *
     * This API endpoint returns bindings for the variables in the query.
     *
     * For more complex JSON queries, use `POST /v1/query` instead.
    **/
    getQuery(req: operations.GetQueryRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryResponse>;
    /**
     * postQuery - Execute an ad-hoc query (complex)
     *
     * This API endpoint returns bindings for the variables in the query.
     *
     * For simpler JSON queries, you may use `GET /v1/query` instead.
    **/
    postQuery(req: operations.PostQueryRequest, config?: AxiosRequestConfig): Promise<operations.PostQueryResponse>;
    /**
     * postSimpleQuery - Execute a simple query
     *
     * This API queries the document at * /data/system/main* by default (however, you can [configure OPA](https://www.openpolicyagent.org/docs/latest/configuration/) to use a different path to serve these queries). That document defines the response.
     * For example, use the following in `PUT /v1/policies/{path}`) to define a rule that will produce a value for the * /data/system/main* document:
     *
     *   ```yaml
     *   package system
     *   main = msg {
     *     msg := sprintf("hello, %v", input.user)
     *   }
     *   ```
     *
     * The server will return a *not found* (404) response if * /data/system/main* is undefined.
    **/
    postSimpleQuery(req: operations.PostSimpleQueryRequest, config?: AxiosRequestConfig): Promise<operations.PostSimpleQueryResponse>;
}
