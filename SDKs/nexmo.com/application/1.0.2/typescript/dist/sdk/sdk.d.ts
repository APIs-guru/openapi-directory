import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.nexmo.com/v1/applications"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createApplication - Create Application
     *
     * You use a `POST` request to create a new application.
    **/
    createApplication(req: operations.CreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * deleteApplication - Destroy Application
     *
     * You use a `DELETE` request to delete a single application.
    **/
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * retrieveApplication - Retrieve Application
     *
     * You use a `GET` request to retrieve details about a single application.
    **/
    retrieveApplication(req: operations.RetrieveApplicationRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveApplicationResponse>;
    /**
     * retrieveApplications - Retrieve all Applications
     *
     * You use a `GET` request to retrieve details of all applications associated with your account.
    **/
    retrieveApplications(req: operations.RetrieveApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveApplicationsResponse>;
    /**
     * updateApplication - Update Application
     *
     * You use a `PUT` request to update an existing application.
    **/
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
}
export {};
