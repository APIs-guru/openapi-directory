import { AxiosInstance } from "axios";
import { Resources } from "./resources";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.open511.gov.bc.ca/", "https://api.open511.gov.bc.ca/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    resources: Resources;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
