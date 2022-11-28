import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Userinfo } from "./userinfo";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://www.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    userinfo: Userinfo;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * oauth2Tokeninfo - Get token info
    **/
    oauth2Tokeninfo(req: operations.Oauth2TokeninfoRequest, config?: AxiosRequestConfig): Promise<operations.Oauth2TokeninfoResponse>;
}
export {};
