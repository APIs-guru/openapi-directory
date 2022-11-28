import { AxiosInstance } from "axios";
import { RequestTag } from "./requesttag";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.nasa.gov/planetary", "http://api.nasa.gov/planetary"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    requestTag: RequestTag;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
