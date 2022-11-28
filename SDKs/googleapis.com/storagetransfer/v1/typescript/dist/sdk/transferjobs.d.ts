import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TransferJobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * storagetransferTransferJobsCreate - Creates a transfer job that runs periodically.
    **/
    storagetransferTransferJobsCreate(req: operations.StoragetransferTransferJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.StoragetransferTransferJobsCreateResponse>;
    /**
     * storagetransferTransferJobsDelete - Deletes a transfer job. Deleting a transfer job sets its status to DELETED.
    **/
    storagetransferTransferJobsDelete(req: operations.StoragetransferTransferJobsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StoragetransferTransferJobsDeleteResponse>;
    /**
     * storagetransferTransferJobsGet - Gets a transfer job.
    **/
    storagetransferTransferJobsGet(req: operations.StoragetransferTransferJobsGetRequest, config?: AxiosRequestConfig): Promise<operations.StoragetransferTransferJobsGetResponse>;
    /**
     * storagetransferTransferJobsList - Lists transfer jobs.
    **/
    storagetransferTransferJobsList(req: operations.StoragetransferTransferJobsListRequest, config?: AxiosRequestConfig): Promise<operations.StoragetransferTransferJobsListResponse>;
    /**
     * storagetransferTransferJobsPatch - Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to DELETED, DISABLED, or ENABLED).
    **/
    storagetransferTransferJobsPatch(req: operations.StoragetransferTransferJobsPatchRequest, config?: AxiosRequestConfig): Promise<operations.StoragetransferTransferJobsPatchResponse>;
    /**
     * storagetransferTransferJobsRun - Starts a new operation for the specified transfer job. A `TransferJob` has a maximum of one active `TransferOperation`. If this method is called while a `TransferOperation` is active, an error is returned.
    **/
    storagetransferTransferJobsRun(req: operations.StoragetransferTransferJobsRunRequest, config?: AxiosRequestConfig): Promise<operations.StoragetransferTransferJobsRunResponse>;
}
