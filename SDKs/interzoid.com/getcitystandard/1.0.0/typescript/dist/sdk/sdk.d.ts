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
     * getcitystandard - Gets a city name standard for US and international cities
     *
     * Gets a pre-selected city name standard for US and international cities for various permutations of a given city name.
    **/
    getcitystandard(req: operations.GetcitystandardRequest, config?: AxiosRequestConfig): Promise<operations.GetcitystandardResponse>;
}
export {};
