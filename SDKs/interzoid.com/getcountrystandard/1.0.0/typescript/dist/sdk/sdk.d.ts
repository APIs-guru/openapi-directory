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
     * getcountrystandard - Gets country name standard
     *
     * Gets a pre-selected country name standard for various permutations of a given country name.
    **/
    getcountrystandard(req: operations.GetcountrystandardRequest, config?: AxiosRequestConfig): Promise<operations.GetcountrystandardResponse>;
}
export {};
