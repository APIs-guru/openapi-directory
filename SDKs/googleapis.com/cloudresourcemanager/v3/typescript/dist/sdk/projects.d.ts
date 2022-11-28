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
     * cloudresourcemanagerProjectsCreate - Request that a new project be created. The result is an `Operation` which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking `Operation` is automatically deleted after a few hours, so there is no need to call `DeleteOperation`.
    **/
    cloudresourcemanagerProjectsCreate(req: operations.CloudresourcemanagerProjectsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsCreateResponse>;
    /**
     * cloudresourcemanagerProjectsList - Lists projects that are direct children of the specified folder or organization resource. `list()` provides a strongly consistent view of the projects underneath the specified parent resource. `list()` returns projects sorted based upon the (ascending) lexical ordering of their `display_name`. The caller must have `resourcemanager.projects.list` permission on the identified parent.
    **/
    cloudresourcemanagerProjectsList(req: operations.CloudresourcemanagerProjectsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsListResponse>;
    /**
     * cloudresourcemanagerProjectsMove - Move a project to another place in your resource hierarchy, under a new resource parent. Returns an operation which can be used to track the process of the project move workflow. Upon success, the `Operation.response` field will be populated with the moved project. The caller must have `resourcemanager.projects.move` permission on the project, on the project's current and proposed new parent. If project has no current parent, or it currently does not have an associated organization resource, you will also need the `resourcemanager.projects.setIamPolicy` permission in the project.
    **/
    cloudresourcemanagerProjectsMove(req: operations.CloudresourcemanagerProjectsMoveRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsMoveResponse>;
    /**
     * cloudresourcemanagerProjectsSearch - Search for projects that the caller has both `resourcemanager.projects.get` permission on, and also satisfy the specified query. This method returns projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method.
    **/
    cloudresourcemanagerProjectsSearch(req: operations.CloudresourcemanagerProjectsSearchRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsSearchResponse>;
    /**
     * cloudresourcemanagerProjectsUndelete - Restores the project identified by the specified `name` (for example, `projects/415104041262`). You can only use this method for a project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the project cannot be restored. The caller must have `resourcemanager.projects.undelete` permission for this project.
    **/
    cloudresourcemanagerProjectsUndelete(req: operations.CloudresourcemanagerProjectsUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsUndeleteResponse>;
}
