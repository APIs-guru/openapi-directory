import { AxiosInstance } from "axios";
import { Courses } from "./courses";
import { Invitations } from "./invitations";
import { Registrations } from "./registrations";
import { UserProfiles } from "./userprofiles";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://classroom.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    courses: Courses;
    invitations: Invitations;
    registrations: Registrations;
    userProfiles: UserProfiles;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
