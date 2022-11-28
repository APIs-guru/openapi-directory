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
    deleteWebhooksV3AppIdSettingsClear(req: operations.DeleteWebhooksV3AppIdSettingsClearRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksV3AppIdSettingsClearResponse>;
    getWebhooksV3AppIdSettingsGetAll(req: operations.GetWebhooksV3AppIdSettingsGetAllRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksV3AppIdSettingsGetAllResponse>;
    putWebhooksV3AppIdSettingsConfigure(req: operations.PutWebhooksV3AppIdSettingsConfigureRequest, config?: AxiosRequestConfig): Promise<operations.PutWebhooksV3AppIdSettingsConfigureResponse>;
}
