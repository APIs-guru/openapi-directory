import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Operations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * servicemanagementOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    servicemanagementOperationsGet(req: operations.ServicemanagementOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.ServicemanagementOperationsGetResponse>;
    /**
     * servicemanagementOperationsList - Lists service operations that match the specified filter in the request.
    **/
    servicemanagementOperationsList(req: operations.ServicemanagementOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.ServicemanagementOperationsListResponse>;
}
