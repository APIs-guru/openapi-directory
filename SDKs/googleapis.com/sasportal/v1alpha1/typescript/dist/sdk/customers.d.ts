import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * sasportalCustomersList - Returns a list of requested customers.
    **/
    sasportalCustomersList(req: operations.SasportalCustomersListRequest, config?: AxiosRequestConfig): Promise<operations.SasportalCustomersListResponse>;
}
