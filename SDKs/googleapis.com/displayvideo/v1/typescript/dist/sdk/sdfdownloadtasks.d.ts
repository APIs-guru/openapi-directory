import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sdfdownloadtasks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * displayvideoSdfdownloadtasksCreate - Creates an SDF Download Task. Returns an Operation. An SDF Download Task is a long-running, asynchronous operation. The metadata type of this operation is SdfDownloadTaskMetadata. If the request is successful, the response type of the operation is SdfDownloadTask. The response will not include the download files, which must be retrieved with media.download. The state of operation can be retrieved with sdfdownloadtask.operations.get. Any errors can be found in the error.message. Note that error.details is expected to be empty.
    **/
    displayvideoSdfdownloadtasksCreate(req: operations.DisplayvideoSdfdownloadtasksCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoSdfdownloadtasksCreateResponse>;
    /**
     * displayvideoSdfdownloadtasksOperationsGet - Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.
    **/
    displayvideoSdfdownloadtasksOperationsGet(req: operations.DisplayvideoSdfdownloadtasksOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoSdfdownloadtasksOperationsGetResponse>;
}
