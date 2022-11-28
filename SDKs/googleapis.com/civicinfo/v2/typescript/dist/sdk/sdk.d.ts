import { AxiosInstance } from "axios";
import { Divisions } from "./divisions";
import { Elections } from "./elections";
import { Representatives } from "./representatives";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://civicinfo.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    divisions: Divisions;
    elections: Elections;
    representatives: Representatives;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
