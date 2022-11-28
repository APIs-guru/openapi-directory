import { AxiosInstance } from "axios";
import { Tasklists } from "./tasklists";
import { Tasks } from "./tasks";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://tasks.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    tasklists: Tasklists;
    tasks: Tasks;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
