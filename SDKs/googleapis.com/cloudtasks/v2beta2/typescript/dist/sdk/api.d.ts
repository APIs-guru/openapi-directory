import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Api {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudtasksApiQueueUpdate - Update queue list by uploading a queue.yaml file. The queue.yaml file is supplied in the request body as a YAML encoded string. This method was added to support gcloud clients versions before 322.0.0. New clients should use CreateQueue instead of this method.
    **/
    cloudtasksApiQueueUpdate(req: operations.CloudtasksApiQueueUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksApiQueueUpdateResponse>;
}
