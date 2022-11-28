import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Settings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * mirrorSettingsGet - Gets a single setting by ID.
    **/
    mirrorSettingsGet(req: operations.MirrorSettingsGetRequest, config?: AxiosRequestConfig): Promise<operations.MirrorSettingsGetResponse>;
}
