import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Directions } from "./directions";
import { Distance } from "./distance";
import { Route } from "./route";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://router.api.gov.bc.ca/", "https://routertst.api.gov.bc.ca/", "https://routerdlv.api.gov.bc.ca/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    directions: Directions;
    distance: Distance;
    route: Route;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
