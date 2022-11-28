import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SettingsExternal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    getMarketingV3MarketingEventsAppIdSettingsGetAll(req: operations.GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest, config?: AxiosRequestConfig): Promise<operations.GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse>;
    postMarketingV3MarketingEventsAppIdSettingsCreate(req: operations.PostMarketingV3MarketingEventsAppIdSettingsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostMarketingV3MarketingEventsAppIdSettingsCreateResponse>;
}
