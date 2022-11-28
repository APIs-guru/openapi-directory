import { AxiosInstance } from "axios";
import { IamPolicies } from "./iampolicies";
import { Permissions } from "./permissions";
import { Projects } from "./projects";
import { Roles } from "./roles";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://iam.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    iamPolicies: IamPolicies;
    permissions: Permissions;
    projects: Projects;
    roles: Roles;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
