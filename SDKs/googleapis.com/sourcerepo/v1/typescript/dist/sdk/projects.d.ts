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
     * sourcerepoProjectsGetConfig - Returns the Cloud Source Repositories configuration of the project.
    **/
    sourcerepoProjectsGetConfig(req: operations.SourcerepoProjectsGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsGetConfigResponse>;
    /**
     * sourcerepoProjectsReposCreate - Creates a repo in the given project with the given name. If the named repository already exists, `CreateRepo` returns `ALREADY_EXISTS`.
    **/
    sourcerepoProjectsReposCreate(req: operations.SourcerepoProjectsReposCreateRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposCreateResponse>;
    /**
     * sourcerepoProjectsReposDelete - Deletes a repo.
    **/
    sourcerepoProjectsReposDelete(req: operations.SourcerepoProjectsReposDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposDeleteResponse>;
    /**
     * sourcerepoProjectsReposGet - Returns information about a repo.
    **/
    sourcerepoProjectsReposGet(req: operations.SourcerepoProjectsReposGetRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposGetResponse>;
    /**
     * sourcerepoProjectsReposGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    sourcerepoProjectsReposGetIamPolicy(req: operations.SourcerepoProjectsReposGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposGetIamPolicyResponse>;
    /**
     * sourcerepoProjectsReposList - Returns all repos belonging to a project. The sizes of the repos are not set by ListRepos. To get the size of a repo, use GetRepo.
    **/
    sourcerepoProjectsReposList(req: operations.SourcerepoProjectsReposListRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposListResponse>;
    /**
     * sourcerepoProjectsReposPatch - Updates information about a repo.
    **/
    sourcerepoProjectsReposPatch(req: operations.SourcerepoProjectsReposPatchRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposPatchResponse>;
    /**
     * sourcerepoProjectsReposSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy.
    **/
    sourcerepoProjectsReposSetIamPolicy(req: operations.SourcerepoProjectsReposSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposSetIamPolicyResponse>;
    /**
     * sourcerepoProjectsReposSync - Synchronize a connected repo. The response contains SyncRepoMetadata in the metadata field.
    **/
    sourcerepoProjectsReposSync(req: operations.SourcerepoProjectsReposSyncRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposSyncResponse>;
    /**
     * sourcerepoProjectsReposTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
    **/
    sourcerepoProjectsReposTestIamPermissions(req: operations.SourcerepoProjectsReposTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposTestIamPermissionsResponse>;
    /**
     * sourcerepoProjectsUpdateConfig - Updates the Cloud Source Repositories configuration of the project.
    **/
    sourcerepoProjectsUpdateConfig(req: operations.SourcerepoProjectsUpdateConfigRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsUpdateConfigResponse>;
}
