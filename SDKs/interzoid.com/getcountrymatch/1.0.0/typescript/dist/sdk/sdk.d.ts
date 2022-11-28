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
     * getcountrymatch - Gets a similarity key for matching purposes for country name data
     *
     * Gets a similarity key to use for matching purposes for country name data
    **/
    getcountrymatch(req: operations.GetcountrymatchRequest, config?: AxiosRequestConfig): Promise<operations.GetcountrymatchResponse>;
}
export {};
