import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Returnpolicyonline {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentReturnpolicyonlineCreate - Creates a new return policy.
    **/
    contentReturnpolicyonlineCreate(req: operations.ContentReturnpolicyonlineCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyonlineCreateResponse>;
    /**
     * contentReturnpolicyonlineDelete - Deletes an existing return policy.
    **/
    contentReturnpolicyonlineDelete(req: operations.ContentReturnpolicyonlineDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyonlineDeleteResponse>;
    /**
     * contentReturnpolicyonlineGet - Gets an existing return policy.
    **/
    contentReturnpolicyonlineGet(req: operations.ContentReturnpolicyonlineGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyonlineGetResponse>;
    /**
     * contentReturnpolicyonlineList - Lists all existing return policies.
    **/
    contentReturnpolicyonlineList(req: operations.ContentReturnpolicyonlineListRequest, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyonlineListResponse>;
    /**
     * contentReturnpolicyonlinePatch - Updates an existing return policy.
    **/
    contentReturnpolicyonlinePatch(req: operations.ContentReturnpolicyonlinePatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyonlinePatchResponse>;
}
