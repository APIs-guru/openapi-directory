import { AxiosInstance } from "axios";
import { Labels } from "./labels";
import { Limits } from "./limits";
import { Users } from "./users";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://drivelabels.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    labels: Labels;
    limits: Limits;
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
