import { AxiosInstance } from "axios";
import { Blocks } from "./blocks";
import { Databases } from "./databases";
import { Pages } from "./pages";
import { Users } from "./users";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.notion.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    blocks: Blocks;
    databases: Databases;
    pages: Pages;
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
