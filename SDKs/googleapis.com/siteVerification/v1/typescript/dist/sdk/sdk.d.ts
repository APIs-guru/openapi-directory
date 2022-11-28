import { AxiosInstance } from "axios";
import { WebResource } from "./webresource";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://www.googleapis.com/siteVerification/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    webResource: WebResource;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
