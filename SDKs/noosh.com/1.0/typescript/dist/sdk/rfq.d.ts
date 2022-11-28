import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Rfq {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getRfq - Get a specific Rfq
     *
     * Get a specific Rfq
    **/
    getRfq(req: operations.GetRfqRequest, config?: AxiosRequestConfig): Promise<operations.GetRfqResponse>;
    /**
     * getRfqList - List the rfqs
     *
     * List the rfqs
    **/
    getRfqList(req: operations.GetRfqListRequest, config?: AxiosRequestConfig): Promise<operations.GetRfqListResponse>;
}
