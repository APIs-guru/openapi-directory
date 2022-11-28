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
     * scriptProjectsCreate - Creates a new, empty script project with no script files and a base manifest file.
    **/
    scriptProjectsCreate(req: operations.ScriptProjectsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsCreateResponse>;
    /**
     * scriptProjectsDeploymentsCreate - Creates a deployment of an Apps Script project.
    **/
    scriptProjectsDeploymentsCreate(req: operations.ScriptProjectsDeploymentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsDeploymentsCreateResponse>;
    /**
     * scriptProjectsDeploymentsDelete - Deletes a deployment of an Apps Script project.
    **/
    scriptProjectsDeploymentsDelete(req: operations.ScriptProjectsDeploymentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsDeploymentsDeleteResponse>;
    /**
     * scriptProjectsDeploymentsGet - Gets a deployment of an Apps Script project.
    **/
    scriptProjectsDeploymentsGet(req: operations.ScriptProjectsDeploymentsGetRequest, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsDeploymentsGetResponse>;
    /**
     * scriptProjectsDeploymentsList - Lists the deployments of an Apps Script project.
    **/
    scriptProjectsDeploymentsList(req: operations.ScriptProjectsDeploymentsListRequest, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsDeploymentsListResponse>;
    /**
     * scriptProjectsDeploymentsUpdate - Updates a deployment of an Apps Script project.
    **/
    scriptProjectsDeploymentsUpdate(req: operations.ScriptProjectsDeploymentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsDeploymentsUpdateResponse>;
    /**
     * scriptProjectsGet - Gets a script project's metadata.
    **/
    scriptProjectsGet(req: operations.ScriptProjectsGetRequest, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsGetResponse>;
    /**
     * scriptProjectsGetContent - Gets the content of the script project, including the code source and metadata for each script file.
    **/
    scriptProjectsGetContent(req: operations.ScriptProjectsGetContentRequest, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsGetContentResponse>;
    /**
     * scriptProjectsGetMetrics - Get metrics data for scripts, such as number of executions and active users.
    **/
    scriptProjectsGetMetrics(req: operations.ScriptProjectsGetMetricsRequest, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsGetMetricsResponse>;
    /**
     * scriptProjectsUpdateContent - Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.
    **/
    scriptProjectsUpdateContent(req: operations.ScriptProjectsUpdateContentRequest, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsUpdateContentResponse>;
    /**
     * scriptProjectsVersionsCreate - Creates a new immutable version using the current code, with a unique version number.
    **/
    scriptProjectsVersionsCreate(req: operations.ScriptProjectsVersionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsVersionsCreateResponse>;
    /**
     * scriptProjectsVersionsGet - Gets a version of a script project.
    **/
    scriptProjectsVersionsGet(req: operations.ScriptProjectsVersionsGetRequest, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsVersionsGetResponse>;
    /**
     * scriptProjectsVersionsList - List the versions of a script project.
    **/
    scriptProjectsVersionsList(req: operations.ScriptProjectsVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsVersionsListResponse>;
}
