import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Request {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteRequestId - Delete a given request.
     *
     * Delete a given request.
    **/
    deleteRequestId(req: operations.DeleteRequestIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRequestIdResponse>;
    /**
     * getRequest - Get a simple directory listing of all requests
     *
     * Get a simple directory listing of all requests
    **/
    getRequest(req: operations.GetRequestRequest, config?: AxiosRequestConfig): Promise<operations.GetRequestResponse>;
    /**
     * getRequestId - Show details about a specified request.
     *
     * Show details about a specified request.
    **/
    getRequestId(req: operations.GetRequestIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRequestIdResponse>;
    /**
     * getRequestViewEqualCollection - Get a collection of requests for a specified target
     *
     * Get a collection of requests for a specified target. **NOTE:**
     * You need to set at least one of the following parameters in order
     * to use this endpoint:
     *
     * * `user`
     * * `project`
     * * `package`
     * * `states`
     * * `types`
     * * `ids`
     *
    **/
    getRequestViewEqualCollection(req: operations.GetRequestViewEqualCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetRequestViewEqualCollectionResponse>;
    /**
     * postRequest - Create a request
     *
     * Create a request
    **/
    postRequest(req: operations.PostRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostRequestResponse>;
    /**
     * postRequestId - Apply certain actions on a specified request.
     *
     * Apply certain actions on a specified request.
    **/
    postRequestId(req: operations.PostRequestIdRequest, config?: AxiosRequestConfig): Promise<operations.PostRequestIdResponse>;
    /**
     * postRequestIdCmdEqualDiff - Get the diff for all packages affected by the request.
     *
     * Get the diff for all packages affected by the request.
     *
    **/
    postRequestIdCmdEqualDiff(req: operations.PostRequestIdCmdEqualDiffRequest, config?: AxiosRequestConfig): Promise<operations.PostRequestIdCmdEqualDiffResponse>;
    /**
     * putRequestId - Modify a given request.
     *
     * Modify a given request.
     *
     * **NOTE:** Certain parts of a request can only be changed by admins.
     *
    **/
    putRequestId(req: operations.PutRequestIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRequestIdResponse>;
}
