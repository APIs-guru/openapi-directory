import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * genomicsProjectsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`
    **/
    genomicsProjectsOperationsCancel(req: operations.GenomicsProjectsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.GenomicsProjectsOperationsCancelResponse>;
    /**
     * genomicsProjectsOperationsList - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`
    **/
    genomicsProjectsOperationsList(req: operations.GenomicsProjectsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.GenomicsProjectsOperationsListResponse>;
    /**
     * genomicsProjectsWorkersCheckIn - The worker uses this method to retrieve the assigned operation and provide periodic status updates.
    **/
    genomicsProjectsWorkersCheckIn(req: operations.GenomicsProjectsWorkersCheckInRequest, config?: AxiosRequestConfig): Promise<operations.GenomicsProjectsWorkersCheckInResponse>;
}
