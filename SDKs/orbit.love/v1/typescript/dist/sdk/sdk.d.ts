import { AxiosInstance } from "axios";
import { Activities } from "./activities";
import { ActivityTypes } from "./activitytypes";
import { Members } from "./members";
import { Notes } from "./notes";
import { Reports } from "./reports";
import { Users } from "./users";
import { Workspaces } from "./workspaces";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://app.orbit.love/api/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    activities: Activities;
    activityTypes: ActivityTypes;
    members: Members;
    notes: Notes;
    reports: Reports;
    users: Users;
    workspaces: Workspaces;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
