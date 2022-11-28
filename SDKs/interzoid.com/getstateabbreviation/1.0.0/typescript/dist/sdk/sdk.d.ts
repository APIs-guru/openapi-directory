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
     * getstateabbreviation - Gets a two-letter abbreviation for a state or province name data
     *
     * Gets a two-letter abbreviation for a state or province given a permutation of state or province data.
    **/
    getstateabbreviation(req: operations.GetstateabbreviationRequest, config?: AxiosRequestConfig): Promise<operations.GetstateabbreviationResponse>;
}
export {};
