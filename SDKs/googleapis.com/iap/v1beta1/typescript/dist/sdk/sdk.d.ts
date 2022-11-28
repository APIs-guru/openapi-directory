import { AxiosInstance } from "axios";
import { V1beta1 } from "./v1beta1";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://iap.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    v1beta1: V1beta1;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
