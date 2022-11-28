import { AxiosInstance } from "axios";
import { Assets } from "./assets";
import { EffectiveIamPolicies } from "./effectiveiampolicies";
import { Feeds } from "./feeds";
import { SavedQueries } from "./savedqueries";
import { V1 } from "./v1";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://cloudasset.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    assets: Assets;
    effectiveIamPolicies: EffectiveIamPolicies;
    feeds: Feeds;
    savedQueries: SavedQueries;
    v1: V1;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
