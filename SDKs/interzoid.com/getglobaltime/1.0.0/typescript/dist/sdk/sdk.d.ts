import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.interzoid.com"];
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
     * getglobaltime - Gets the current time for a global locale
     *
     * Gets the current time for a global locale (city, state, region, or country such as Chicago, London, Paris, Seoul, Spain, Buenos Aires, Hawaii, Moscow, Tokyo, Hanoi, etc.)
    **/
    getglobaltime(req: operations.GetglobaltimeRequest, config?: AxiosRequestConfig): Promise<operations.GetglobaltimeResponse>;
}
export {};
