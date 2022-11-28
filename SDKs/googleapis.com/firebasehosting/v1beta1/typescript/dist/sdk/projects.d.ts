import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * firebasehostingProjectsSitesCreate - Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.
    **/
    firebasehostingProjectsSitesCreate(req: operations.FirebasehostingProjectsSitesCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingProjectsSitesCreateResponse>;
    /**
     * firebasehostingProjectsSitesList - Lists each Hosting Site associated with the specified parent Firebase project.
    **/
    firebasehostingProjectsSitesList(req: operations.FirebasehostingProjectsSitesListRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingProjectsSitesListResponse>;
}
