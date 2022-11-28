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
     * getfullnamematch - Gets a similarity key for matching purposes for full name data
     *
     * Gets a similarity key for matching purposes for full name data, where first and last name are part of the same field.
    **/
    getfullnamematch(req: operations.GetfullnamematchRequest, config?: AxiosRequestConfig): Promise<operations.GetfullnamematchResponse>;
}
export {};
