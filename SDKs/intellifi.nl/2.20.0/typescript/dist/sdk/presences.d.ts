import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Presences {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPresenceById - Get presence
    **/
    getPresenceById(req: operations.GetPresenceByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPresenceByIdResponse>;
    /**
     * getPresences - Get all presences
    **/
    getPresences(req: operations.GetPresencesRequest, config?: AxiosRequestConfig): Promise<operations.GetPresencesResponse>;
}
