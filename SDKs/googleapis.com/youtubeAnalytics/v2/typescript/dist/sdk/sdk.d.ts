import { AxiosInstance } from "axios";
import { GroupItems } from "./groupitems";
import { Groups } from "./groups";
import { Reports } from "./reports";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://youtubeanalytics.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    groupItems: GroupItems;
    groups: Groups;
    reports: Reports;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
