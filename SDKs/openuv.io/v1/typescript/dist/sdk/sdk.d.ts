import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.openuv.io/api/{version}"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getForecast - Get hourly UV Index Forecast by location and date. Optional altitude, ozone level and datetime could be provided.
    **/
    getForecast(req: operations.GetForecastRequest, config?: AxiosRequestConfig): Promise<operations.GetForecastResponse>;
    /**
     * getProtection - Get daily protection time by location, UV Index from and UV Index to with 10 minutes accuracy. Optional altitide and ozone level could be provided.
    **/
    getProtection(req: operations.GetProtectionRequest, config?: AxiosRequestConfig): Promise<operations.GetProtectionResponse>;
    /**
     * getUv - Get real-time UV Index by location. Optional altitude, ozone level and datetime could be provided.
    **/
    getUv(req: operations.GetUvRequest, config?: AxiosRequestConfig): Promise<operations.GetUvResponse>;
}
export {};
