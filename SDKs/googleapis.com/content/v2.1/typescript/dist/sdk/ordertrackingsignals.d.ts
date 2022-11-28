import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Ordertrackingsignals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentOrdertrackingsignalsCreate - Creates new order tracking signal.
    **/
    contentOrdertrackingsignalsCreate(req: operations.ContentOrdertrackingsignalsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdertrackingsignalsCreateResponse>;
}
