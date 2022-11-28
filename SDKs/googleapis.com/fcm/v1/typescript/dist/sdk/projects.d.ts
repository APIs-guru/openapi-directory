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
     * fcmProjectsMessagesSend - Send a message to specified target (a registration token, topic or condition).
    **/
    fcmProjectsMessagesSend(req: operations.FcmProjectsMessagesSendRequest, config?: AxiosRequestConfig): Promise<operations.FcmProjectsMessagesSendResponse>;
}
