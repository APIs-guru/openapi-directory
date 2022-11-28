import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TransferOperations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * storagetransferTransferOperationsCancel - Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the operation completed despite the `cancel` request. When you cancel an operation, the currently running transfer is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example, if your job is configured to run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently running operations. If an operation is not currently running, `cancel` does nothing. *Caution:* Canceling a transfer job can leave your data in an unknown state. We recommend that you restore the state at both the destination and the source after the `cancel` request completes so that your data is in a consistent state. When you cancel a job, the next job computes a delta of files and may repair any inconsistent state. For instance, if you run a job every day, and today's job found 10 new files and transferred five files before you canceled the job, tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any new files discovered tomorrow.
    **/
    storagetransferTransferOperationsCancel(req: operations.StoragetransferTransferOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.StoragetransferTransferOperationsCancelResponse>;
    /**
     * storagetransferTransferOperationsList - Lists transfer operations. Operations are ordered by their creation time in reverse chronological order.
    **/
    storagetransferTransferOperationsList(req: operations.StoragetransferTransferOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.StoragetransferTransferOperationsListResponse>;
    /**
     * storagetransferTransferOperationsPause - Pauses a transfer operation.
    **/
    storagetransferTransferOperationsPause(req: operations.StoragetransferTransferOperationsPauseRequest, config?: AxiosRequestConfig): Promise<operations.StoragetransferTransferOperationsPauseResponse>;
    /**
     * storagetransferTransferOperationsResume - Resumes a transfer operation that is paused.
    **/
    storagetransferTransferOperationsResume(req: operations.StoragetransferTransferOperationsResumeRequest, config?: AxiosRequestConfig): Promise<operations.StoragetransferTransferOperationsResumeResponse>;
}
