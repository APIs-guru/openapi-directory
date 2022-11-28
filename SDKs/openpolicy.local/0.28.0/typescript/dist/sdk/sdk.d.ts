import { AxiosInstance } from "axios";
import { CompileApi } from "./compileapi";
import { DataApi } from "./dataapi";
import { HealthApi } from "./healthapi";
import { PolicyApi } from "./policyapi";
import { QueryApi } from "./queryapi";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://openpolicy.local"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    compileApi: CompileApi;
    dataApi: DataApi;
    healthApi: HealthApi;
    policyApi: PolicyApi;
    queryApi: QueryApi;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
