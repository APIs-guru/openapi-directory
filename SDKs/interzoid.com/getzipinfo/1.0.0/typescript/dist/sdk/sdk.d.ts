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
     * getzipcodeinfo - Gets detailed zip code information
     *
     * For a given zip code, detailed information is returned, including city, state, latitude, longitude, area size, and various population demographics, including income, age, and presence of farming data.
    **/
    getzipcodeinfo(req: operations.GetzipcodeinfoRequest, config?: AxiosRequestConfig): Promise<operations.GetzipcodeinfoResponse>;
}
export {};
