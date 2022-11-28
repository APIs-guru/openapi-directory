import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.nexmo.com/v2/applications"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createApplication - Create an application
    **/
    createApplication(req: operations.CreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * deleteApplication - Delete an application
     *
     * Deleting an application **cannot be undone**.
    **/
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * getApplication - Get an application
    **/
    getApplication(req: operations.GetApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationResponse>;
    /**
     * listApplication - List available applications
    **/
    listApplication(req: operations.ListApplicationRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationResponse>;
    /**
     * updateApplication - Update an application
    **/
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
}
export {};
