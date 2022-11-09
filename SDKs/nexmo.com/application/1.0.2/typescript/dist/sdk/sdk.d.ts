import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * You use a `POST` request to create a new application.
    **/
    CreateApplication(req: operations.CreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * You use a `DELETE` request to delete a single application.
    **/
    DeleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * You use a `GET` request to retrieve details about a single application.
    **/
    RetrieveApplication(req: operations.RetrieveApplicationRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveApplicationResponse>;
    /**
     * You use a `GET` request to retrieve details of all applications associated with your account.
    **/
    RetrieveApplications(req: operations.RetrieveApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveApplicationsResponse>;
    /**
     * You use a `PUT` request to update an existing application.
    **/
    UpdateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
}
export {};
