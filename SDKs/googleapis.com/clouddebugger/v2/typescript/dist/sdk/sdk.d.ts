import { AxiosInstance } from "axios";
import { Controller } from "./controller";
import { Debugger } from "./debugger";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://clouddebugger.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    controller: Controller;
    debugger: Debugger;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
