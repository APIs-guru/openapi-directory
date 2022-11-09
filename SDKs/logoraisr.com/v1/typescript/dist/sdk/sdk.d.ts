import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * This GET-Method returns the URL where the preview image of uploaded file can downloaded from.
    **/
    PreviewsRead(req: operations.PreviewsReadRequest, config?: AxiosRequestConfig): Promise<operations.PreviewsReadResponse>;
    /**
     * This GET-Method lists all on logoraisr available processes.
    **/
    ProcessesList(config?: AxiosRequestConfig): Promise<operations.ProcessesListResponse>;
    /**
     * This POST-Method creates a new project.
    **/
    ProjectsCreate(req: operations.ProjectsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateResponse>;
    /**
     * This GET-Method lists the user's projects.
    **/
    ProjectsList(config?: AxiosRequestConfig): Promise<operations.ProjectsListResponse>;
    /**
     * This GET-Method returns a specific project.
    **/
    ProjectsRead(req: operations.ProjectsReadRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsReadResponse>;
    /**
     * This POST-Method creates a new report.
    **/
    ReportsCreate(req: operations.ReportsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ReportsCreateResponse>;
    /**
     * This GET method lists the user's reports.
    **/
    ReportsList(config?: AxiosRequestConfig): Promise<operations.ReportsListResponse>;
    /**
     * This GET-Method returns the details of a specific report.
    **/
    ReportsRead(req: operations.ReportsReadRequest, config?: AxiosRequestConfig): Promise<operations.ReportsReadResponse>;
    /**
     * This GET-Method returns the URL where the result can downloaded from.
    **/
    ResultsRead(req: operations.ResultsReadRequest, config?: AxiosRequestConfig): Promise<operations.ResultsReadResponse>;
    /**
     * This POST-Method uploads a new file on the server.
    **/
    UploadsCreate(req: operations.UploadsCreateRequest, config?: AxiosRequestConfig): Promise<operations.UploadsCreateResponse>;
}
export {};
