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
     * globalpageload - Gets page load (or an API call) performance from a specified global geography such as Paris, Tokyo, Virginia, Mumbai, Frankfurt, London, Seoul, California, Sao Paolo, and many more.
     *
     * Gets page load performance from a specified geography
     *
    **/
    globalpageload(req: operations.GlobalpageloadRequest, config?: AxiosRequestConfig): Promise<operations.GlobalpageloadResponse>;
}
export {};
