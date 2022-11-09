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
     * Delete an attribute namespace and all attributes below.
     *
     * This operation is the same as the one defined with [DELETE /attribute/{namespace}/_meta](#/Attributes/delete_attribute__namespace___meta).
     *
    **/
    DeleteAttributeNamespace(req: operations.DeleteAttributeNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttributeNamespaceResponse>;
    /**
     * Delete an attribute and all its values in projects or packages.
     *
     * This operation is the same as the one defined with [DELETE /attribute/{namespace}/{attribute_name}/_meta](#/Attributes/delete_attribute__namespace___attribute_name___meta)
     *
    **/
    DeleteAttributeNamespaceAttributeName(req: operations.DeleteAttributeNamespaceAttributeNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttributeNamespaceAttributeNameResponse>;
    /**
     * Delete an attribute and all its values in projects or packages.
     *
     * This operation is the same as the one defined with [DELETE /attribute/{namespace}/{attribute_name}](#/Attributes/delete_attribute__namespace___attribute_name_)
     *
    **/
    DeleteAttributeNamespaceAttributeNameMeta(req: operations.DeleteAttributeNamespaceAttributeNameMetaRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttributeNamespaceAttributeNameMetaResponse>;
    /**
     * Delete an attribute namespace and all attributes below.
     *
     * This operation is the same as the one defined with [DELETE /attribute/{namespace}](#/Attributes/delete_attribute__namespace_).
     *
    **/
    DeleteAttributeNamespaceMeta(req: operations.DeleteAttributeNamespaceMetaRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttributeNamespaceMetaResponse>;
    /**
     * Delete a distribution.
     *
     * This is only for admins.
     *
    **/
    DeleteDistributionsDistributionId(req: operations.DeleteDistributionsDistributionIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDistributionsDistributionIdResponse>;
    /**
     * Delete a group.
    **/
    DeleteGroupGroupTitle(req: operations.DeleteGroupGroupTitleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupGroupTitleResponse>;
    /**
     * Delete an issue tracker.
    **/
    DeleteIssueTrackersIssueTrackerName(req: operations.DeleteIssueTrackersIssueTrackerNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIssueTrackersIssueTrackerNameResponse>;
    /**
     * Delete a token of the specified person.
    **/
    DeletePersonLoginTokenId(req: operations.DeletePersonLoginTokenIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePersonLoginTokenIdResponse>;
    /**
     * Delete a given request.
    **/
    DeleteRequestId(req: operations.DeleteRequestIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRequestIdResponse>;
    /**
     * Get generic information about the API.
    **/
    GetAbout(config?: AxiosRequestConfig): Promise<operations.GetAboutResponse>;
    /**
     * Get a list of all known architectures known to OBS in general. This is not the list of architectures provided by this instance. Check the schedulers element from the `/configuration` route for this.
     *
    **/
    GetArchitectures(req: operations.GetArchitecturesRequest, config?: AxiosRequestConfig): Promise<operations.GetArchitecturesResponse>;
    /**
     * Show information about one architecture.
    **/
    GetArchitecturesArchitectureName(req: operations.GetArchitecturesArchitectureNameRequest, config?: AxiosRequestConfig): Promise<operations.GetArchitecturesArchitectureNameResponse>;
    /**
     * List all attribute namespaces.
    **/
    GetAttribute(req: operations.GetAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GetAttributeResponse>;
    /**
     * List all attributes under a given attribute namespace.
    **/
    GetAttributeNamespace(req: operations.GetAttributeNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.GetAttributeNamespaceResponse>;
    /**
     * Shows attribute.
    **/
    GetAttributeNamespaceAttributeNameMeta(req: operations.GetAttributeNamespaceAttributeNameMetaRequest, config?: AxiosRequestConfig): Promise<operations.GetAttributeNamespaceAttributeNameMetaResponse>;
    /**
     * Shows attribute namespace.
    **/
    GetAttributeNamespaceMeta(req: operations.GetAttributeNamespaceMetaRequest, config?: AxiosRequestConfig): Promise<operations.GetAttributeNamespaceMetaResponse>;
    /**
     * Get a simple directory listing of all projects
    **/
    GetBuild(req: operations.GetBuildRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildResponse>;
    /**
     * Get a simple directory listing of all repositories for the specified project
    **/
    GetBuildProjectName(req: operations.GetBuildProjectNameRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameResponse>;
    /**
     * List of all architectures the specified project builds against a given repository.
    **/
    GetBuildProjectNameRepositoryName(req: operations.GetBuildProjectNameRepositoryNameRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameRepositoryNameResponse>;
    /**
     * Show the build dependencies of packages that are part of the project, for a given repository and architecture.
     *
    **/
    GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfo(req: operations.GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse>;
    /**
     * List binaries built by the sources of the specified package.
    **/
    GetBuildProjectNameRepositoryNameArchitectureNamePackageName(req: operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameResponse>;
    /**
     * Show the build status of a currently running build job. Shows an empty result if no build job is running.
     *
    **/
    GetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatus(req: operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusResponse>;
    /**
     * Details about the reason of the lastly triggered build.
    **/
    GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReason(req: operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonResponse>;
    /**
     * List all binaries (produced by all packages of the given project) for the specified repository and architecture.
     *
    **/
    GetBuildProjectNameRepositoryNameArchitectureNameRepository(req: operations.GetBuildProjectNameRepositoryNameArchitectureNameRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameRepositoryNameArchitectureNameRepositoryResponse>;
    /**
     * Show the build configuration for the specified repository. Includes all base package requirements, mappings and macros.
     *
    **/
    GetBuildProjectNameRepositoryNameBuildconfig(req: operations.GetBuildProjectNameRepositoryNameBuildconfigRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameRepositoryNameBuildconfigResponse>;
    /**
     * Get the build results for packages, architectures and repositories of the specified project.
    **/
    GetBuildProjectNameResult(req: operations.GetBuildProjectNameResultRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameResultResponse>;
    /**
     * Display the configuration of this Open Build Service instance.
     *
    **/
    GetConfiguration(req: operations.GetConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationResponse>;
    /**
     * List all distributions that can be build against.
     * This will not list distributions that are available via [interconnect](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.concepts.html#id-1.5.10.3.5).
     * Check /distributions/include_remotes for this.
     *
    **/
    GetDistributions(req: operations.GetDistributionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDistributionsResponse>;
    /**
     * Show a distribution that can be build against.
     *
    **/
    GetDistributionsDistributionId(req: operations.GetDistributionsDistributionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDistributionsDistributionIdResponse>;
    /**
     * List all distributions that can be build against, including the ones provided by the interconnect.
     *
    **/
    GetDistributionsIncludeRemotes(req: operations.GetDistributionsIncludeRemotesRequest, config?: AxiosRequestConfig): Promise<operations.GetDistributionsIncludeRemotesResponse>;
    /**
     * List available groups.
    **/
    GetGroup(req: operations.GetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupResponse>;
    /**
     * Read group data.
    **/
    GetGroupGroupTitle(req: operations.GetGroupGroupTitleRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupGroupTitleResponse>;
    /**
     * Get the list of issue trackers.
    **/
    GetIssueTrackers(req: operations.GetIssueTrackersRequest, config?: AxiosRequestConfig): Promise<operations.GetIssueTrackersResponse>;
    /**
     * Show an issue tracker.
    **/
    GetIssueTrackersIssueTrackerName(req: operations.GetIssueTrackersIssueTrackerNameRequest, config?: AxiosRequestConfig): Promise<operations.GetIssueTrackersIssueTrackerNameResponse>;
    /**
     * Show an issue of an issue tracker.
    **/
    GetIssueTrackersIssueTrackerNameIssuesIssueName(req: operations.GetIssueTrackersIssueTrackerNameIssuesIssueNameRequest, config?: AxiosRequestConfig): Promise<operations.GetIssueTrackersIssueTrackerNameIssuesIssueNameResponse>;
    /**
     * List all people.
     *
    **/
    GetPerson(req: operations.GetPersonRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonResponse>;
    GetPersonLogin(req: operations.GetPersonLoginRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonLoginResponse>;
    /**
     * List the groups the person belongs to.
    **/
    GetPersonLoginGroup(req: operations.GetPersonLoginGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonLoginGroupResponse>;
    /**
     * List the authentication tokens of a person.
    **/
    GetPersonLoginToken(req: operations.GetPersonLoginTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonLoginTokenResponse>;
    /**
     * Get a list of all the projects, all of them are considered published.
     *
    **/
    GetPublished(req: operations.GetPublishedRequest, config?: AxiosRequestConfig): Promise<operations.GetPublishedResponse>;
    /**
     * Get a list of the repositories of the project that already have published binaries.
     *
    **/
    GetPublishedProjectName(req: operations.GetPublishedProjectNameRequest, config?: AxiosRequestConfig): Promise<operations.GetPublishedProjectNameResponse>;
    /**
     * Get a list of architectures' directories and other files (.repo, .ymp, etc.) present at the level project/repository of the directory tree where the published binaries are stored.
     *
    **/
    GetPublishedProjectNameRepositoryName(req: operations.GetPublishedProjectNameRepositoryNameRequest, config?: AxiosRequestConfig): Promise<operations.GetPublishedProjectNameRepositoryNameResponse>;
    /**
     * Get a list of binaries and other files present at the level project/repository/architecture of the directory tree as a result of successful building and publishing processes.
     *
    **/
    GetPublishedProjectNameRepositoryNameArchitectureName(req: operations.GetPublishedProjectNameRepositoryNameArchitectureNameRequest, config?: AxiosRequestConfig): Promise<operations.GetPublishedProjectNameRepositoryNameArchitectureNameResponse>;
    /**
     * Allow to download the binary file that was published and stored under the directory given by project/repository/architecture/.
     * Can response with Media Types like application/x-rpm, text/xml, etc.
     * NOTE: Use this only if you absolutely have to, as it doesn't use the redirector.
     *
    **/
    GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename(req: operations.GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRequest, config?: AxiosRequestConfig): Promise<operations.GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse>;
    /**
     * Generate a ymp pattern, which contains the list of packages needed for intalling certain software without having to create dependencies between them.
     * Read more about patterns [in this tutorial](https://en.opensuse.org/openSUSE:Build_Service_Tutorial#Create_Patterns).
     *
    **/
    GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmp(req: operations.GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpRequest, config?: AxiosRequestConfig): Promise<operations.GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpResponse>;
    /**
     * Get information about the build process (build id, start time, etc.) for the pair project and repository.
     *
    **/
    GetPublishedProjectNameRepositoryNameViewEqualStatus(req: operations.GetPublishedProjectNameRepositoryNameViewEqualStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetPublishedProjectNameRepositoryNameViewEqualStatusResponse>;
    /**
     * Get a simple directory listing of all requests
    **/
    GetRequest(req: operations.GetRequestRequest, config?: AxiosRequestConfig): Promise<operations.GetRequestResponse>;
    /**
     * Show details about a specified request.
    **/
    GetRequestId(req: operations.GetRequestIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRequestIdResponse>;
    /**
     * Get a collection of requests for a specified target. **NOTE:**
     * You need to set at least one of the following parameters in order
     * to use this endpoint:
     *
     * * `user`
     * * `project`
     * * `package`
     * * `states`
     * * `types`
     * * `ids`
     *
    **/
    GetRequestViewEqualCollection(req: operations.GetRequestViewEqualCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetRequestViewEqualCollectionResponse>;
    /**
     * Lists capabilites of a worker.
     *
     * This can be useful when checking for constraints.
     *
     * This operation is the same as `GET /worker/capability/{architecture_name}:{worker_id}`.
     *
    **/
    GetWorkerArchitectureNameWorkerId(req: operations.GetWorkerArchitectureNameWorkerIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkerArchitectureNameWorkerIdResponse>;
    /**
     * Lists status of workers, running jobs, waiting jobs, status of the backend services and general statistics.
     *
     * Other ways to obtain the same information as with this endpoint are:
     *   * `GET /worker/_status`
     *   * `GET /status/workerstatus`
     *   * `GET /build/_workerstatus`
     *
    **/
    GetWorkerStatus(req: operations.GetWorkerStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkerStatusResponse>;
    /**
     * This endpoint can be used for both, creating an attribute and updating it:
     *   * If the attribute passed as parameter doesn't exist, it will create the attribute.
     *   * If the attribute passed as parameter already exists, it will update the attribute.
     *
     * This operation is the same as the one defined with [PUT](#/Attributes/put_attribute__namespace___attribute_name___meta).
     *
    **/
    PostAttributeNamespaceAttributeNameMeta(req: operations.PostAttributeNamespaceAttributeNameMetaRequest, config?: AxiosRequestConfig): Promise<operations.PostAttributeNamespaceAttributeNameMetaResponse>;
    /**
     * This endpoint can be used for both, creating an attribute namespace and updating it:
     *   * If the attribute namespace passed as parameter doesn't exist, it will create the attribute namespace.
     *   * If the attribute namespace passed as parameter already exists, it will update the namespace attribute.
     *
     * This operation is the same as the one defined with [PUT](#/Attributes/put_attribute__namespace___meta).
     *
    **/
    PostAttributeNamespaceMeta(req: operations.PostAttributeNamespaceMetaRequest, config?: AxiosRequestConfig): Promise<operations.PostAttributeNamespaceMetaResponse>;
    /**
     * Apply different actions on builds/build processes of the specified project
    **/
    PostBuildProjectName(req: operations.PostBuildProjectNameRequest, config?: AxiosRequestConfig): Promise<operations.PostBuildProjectNameResponse>;
    /**
     * Create a distribution.
     *
     * This is only for admins.
     *
    **/
    PostDistributions(req: operations.PostDistributionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDistributionsResponse>;
    /**
     * Modify group data.
    **/
    PostGroupGroupTitle(req: operations.PostGroupGroupTitleRequest, config?: AxiosRequestConfig): Promise<operations.PostGroupGroupTitleResponse>;
    /**
     * Create an issue tracker.
    **/
    PostIssueTrackers(req: operations.PostIssueTrackersRequest, config?: AxiosRequestConfig): Promise<operations.PostIssueTrackersResponse>;
    /**
     * Allows executing command on the person endpoint.
     *
     * As of now, the only command allowed is 'register'.
     *
    **/
    PostPerson(req: operations.PostPersonRequest, config?: AxiosRequestConfig): Promise<operations.PostPersonResponse>;
    PostPersonLogin(req: operations.PostPersonLoginRequest, config?: AxiosRequestConfig): Promise<operations.PostPersonLoginResponse>;
    /**
     * Create a new authentication token for a person.
     *
     * The token may be limited to a specific package. In this case the query parameters
     * `project` and `package` should be provided.
     *
     * With an empty request body, a token of the default kind 'runservice' is created.
     *
    **/
    PostPersonLoginToken(req: operations.PostPersonLoginTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostPersonLoginTokenResponse>;
    PostPersonRegister(req: operations.PostPersonRegisterRequest, config?: AxiosRequestConfig): Promise<operations.PostPersonRegisterResponse>;
    /**
     * Create a request
    **/
    PostRequest(req: operations.PostRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostRequestResponse>;
    /**
     * Apply certain actions on a specified request.
    **/
    PostRequestId(req: operations.PostRequestIdRequest, config?: AxiosRequestConfig): Promise<operations.PostRequestIdResponse>;
    /**
     * Get the diff for all packages affected by the request.
     *
    **/
    PostRequestIdCmdEqualDiff(req: operations.PostRequestIdCmdEqualDiffRequest, config?: AxiosRequestConfig): Promise<operations.PostRequestIdCmdEqualDiffResponse>;
    /**
     * Given a project, package, repository and architecture, list workers which can build with that restrictions, and also match a constraints filter.
     *
     * This endpoint doesn't create or modify any data.
     *
     * More information about constraints can be found in the
     * [user guide](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.build_job_constraints.html).
     *
     * This operation is the same as `POST /worker/command/run?cmd=checkconstraints`.
     *
    **/
    PostWorkerCmdEqualCheckconstraints(req: operations.PostWorkerCmdEqualCheckconstraintsRequest, config?: AxiosRequestConfig): Promise<operations.PostWorkerCmdEqualCheckconstraintsResponse>;
    /**
     * This endpoint can be used for both, creating an attribute and updating it:
     *   * If the attribute passed as parameter doesn't exist, it will create the attribute.
     *   * If the attribute passed as parameter already exists, it will update the attribute.
     *
     * This operation is the same as the one defined with [POST](#/Attributes/post_attribute__namespace___attribute_name___meta).
     *
    **/
    PutAttributeNamespaceAttributeNameMeta(req: operations.PutAttributeNamespaceAttributeNameMetaRequest, config?: AxiosRequestConfig): Promise<operations.PutAttributeNamespaceAttributeNameMetaResponse>;
    /**
     * This endpoint can be used for both, creating an attribute namespace and updating it:
     *   * If the attribute namespace passed as parameter doesn't exist, it will create the attribute namespace.
     *   * If the attribute namespace passed as parameter already exists, it will update the namespace attribute.
     *
     * This operation is the same as the one defined with [POST](#/Attributes/post_attribute__namespace___meta).
     *
    **/
    PutAttributeNamespaceMeta(req: operations.PutAttributeNamespaceMetaRequest, config?: AxiosRequestConfig): Promise<operations.PutAttributeNamespaceMetaResponse>;
    /**
     * Update the configuration of this Open Build Service instance.
     *
     * This is for admins only.
     *
    **/
    PutConfiguration(req: operations.PutConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutConfigurationResponse>;
    /**
     * Bulk replace all distributions.
     *
     * This is only for admins.
     *
    **/
    PutDistributionsBulkReplace(req: operations.PutDistributionsBulkReplaceRequest, config?: AxiosRequestConfig): Promise<operations.PutDistributionsBulkReplaceResponse>;
    /**
     * Update the data of a distribution.
    **/
    PutDistributionsDistributionId(req: operations.PutDistributionsDistributionIdRequest, config?: AxiosRequestConfig): Promise<operations.PutDistributionsDistributionIdResponse>;
    /**
     * Write group data.
    **/
    PutGroupGroupTitle(req: operations.PutGroupGroupTitleRequest, config?: AxiosRequestConfig): Promise<operations.PutGroupGroupTitleResponse>;
    /**
     * Update the issue tracker given as path parameter. If it is not found, create it.
    **/
    PutIssueTrackersIssueTrackerName(req: operations.PutIssueTrackersIssueTrackerNameRequest, config?: AxiosRequestConfig): Promise<operations.PutIssueTrackersIssueTrackerNameResponse>;
    PutPersonLogin(req: operations.PutPersonLoginRequest, config?: AxiosRequestConfig): Promise<operations.PutPersonLoginResponse>;
    /**
     * Modify a given request.
     *
     * **NOTE:** Certain parts of a request can only be changed by admins.
     *
    **/
    PutRequestId(req: operations.PutRequestIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRequestIdResponse>;
    GetBuildProjectRepositoryArchPackageBuildinfo(req: operations.GetBuildProjectRepositoryArchPackageBuildinfoRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectRepositoryArchPackageBuildinfoResponse>;
    GetBuildProjectRepositoryArchPackageHistory(req: operations.GetBuildProjectRepositoryArchPackageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectRepositoryArchPackageHistoryResponse>;
    GetBuildProjectRepositoryArchPackageLog(req: operations.GetBuildProjectRepositoryArchPackageLogRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectRepositoryArchPackageLogResponse>;
    GetBuildProjectRepositoryArchPackageStatus(req: operations.GetBuildProjectRepositoryArchPackageStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectRepositoryArchPackageStatusResponse>;
    /**
     * Given a project, repository, architecture and package, retrieve the given file's content.
     *
    **/
    GetBuildProjectRepositoryArchitecturePackageFile(req: operations.GetBuildProjectRepositoryArchitecturePackageFileRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectRepositoryArchitecturePackageFileResponse>;
    /**
     * Given a project, repository, architecture and package, retrieve the given artifact's details.
     *
    **/
    GetBuildProjectRepositoryArchitecturePackageFileViewFileinfo(req: operations.GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse>;
    /**
     * Given a project, repository, architecture and package, update the given file's content.
     *
     * This is for Admins only.
     *
    **/
    PutBuildProjectRepositoryArchitecturePackageFile(req: operations.PutBuildProjectRepositoryArchitecturePackageFileRequest, config?: AxiosRequestConfig): Promise<operations.PutBuildProjectRepositoryArchitecturePackageFileResponse>;
}
export {};
