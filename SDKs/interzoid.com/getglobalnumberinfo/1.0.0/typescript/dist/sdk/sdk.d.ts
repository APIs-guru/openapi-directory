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
     * getglobalnumberinfo - Get demographic information for a global telephone number
     *
     * Get demographic information for a global telephone number, including city and country information, primary languages spoken, and mobile device identification.
    **/
    getglobalnumberinfo(req: operations.GetglobalnumberinfoRequest, config?: AxiosRequestConfig): Promise<operations.GetglobalnumberinfoResponse>;
}
export {};
