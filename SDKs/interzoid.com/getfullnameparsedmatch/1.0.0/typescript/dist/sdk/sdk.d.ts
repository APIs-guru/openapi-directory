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
     * getfullnameparsedmatch - Gets a similarity key for matching purposes for parsed full name data
     *
     * Gets a similarity key for matching purposes for parsed full name data, where the first name and last name are split into separate fields in the source data rather than combined.
    **/
    getfullnameparsedmatch(req: operations.GetfullnameparsedmatchRequest, config?: AxiosRequestConfig): Promise<operations.GetfullnameparsedmatchResponse>;
}
export {};
