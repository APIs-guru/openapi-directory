import { AxiosInstance } from "axios";
import { GoogleServiceAccounts } from "./googleserviceaccounts";
import { Projects } from "./projects";
import { TransferJobs } from "./transferjobs";
import { TransferOperations } from "./transferoperations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://storagetransfer.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    googleServiceAccounts: GoogleServiceAccounts;
    projects: Projects;
    transferJobs: TransferJobs;
    transferOperations: TransferOperations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
