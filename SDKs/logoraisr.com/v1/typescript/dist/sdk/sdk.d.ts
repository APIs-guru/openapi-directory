import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.logoraisr.com/rest-v1"];
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
     * previewsRead - Get preview image of uploaded file
     *
     * This GET-Method returns the URL where the preview image of uploaded file can downloaded from.
    **/
    previewsRead(req: operations.PreviewsReadRequest, config?: AxiosRequestConfig): Promise<operations.PreviewsReadResponse>;
    /**
     * processesList - Get process list.
     *
     * This GET-Method lists all on logoraisr available processes.
    **/
    processesList(config?: AxiosRequestConfig): Promise<operations.ProcessesListResponse>;
    /**
     * projectsCreate - Create a new project.
     *
     * This POST-Method creates a new project.
    **/
    projectsCreate(req: operations.ProjectsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateResponse>;
    /**
     * projectsList - Get user project list.
     *
     * This GET-Method lists the user's projects.
    **/
    projectsList(config?: AxiosRequestConfig): Promise<operations.ProjectsListResponse>;
    /**
     * projectsRead - Get project details.
     *
     * This GET-Method returns a specific project.
    **/
    projectsRead(req: operations.ProjectsReadRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsReadResponse>;
    /**
     * reportsCreate - Create a new report.
     *
     * This POST-Method creates a new report.
    **/
    reportsCreate(req: operations.ReportsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ReportsCreateResponse>;
    /**
     * reportsList - Get user report list.
     *
     * This GET method lists the user's reports.
    **/
    reportsList(config?: AxiosRequestConfig): Promise<operations.ReportsListResponse>;
    /**
     * reportsRead - Get report details.
     *
     * This GET-Method returns the details of a specific report.
    **/
    reportsRead(req: operations.ReportsReadRequest, config?: AxiosRequestConfig): Promise<operations.ReportsReadResponse>;
    /**
     * resultsRead - Get the result from image processing
     *
     * This GET-Method returns the URL where the result can downloaded from.
    **/
    resultsRead(req: operations.ResultsReadRequest, config?: AxiosRequestConfig): Promise<operations.ResultsReadResponse>;
    /**
     * uploadsCreate - Upload a new image
     *
     * This POST-Method uploads a new file on the server.
    **/
    uploadsCreate(req: operations.UploadsCreateRequest, config?: AxiosRequestConfig): Promise<operations.UploadsCreateResponse>;
}
export {};
