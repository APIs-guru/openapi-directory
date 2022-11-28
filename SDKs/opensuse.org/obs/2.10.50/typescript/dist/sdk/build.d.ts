import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Build {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBuild - Get a simple directory listing of all projects
     *
     * Get a simple directory listing of all projects
    **/
    getBuild(req: operations.GetBuildRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildResponse>;
    /**
     * getBuildProjectName - Get a simple directory listing of all repositories for the specified project
     *
     * Get a simple directory listing of all repositories for the specified project
    **/
    getBuildProjectName(req: operations.GetBuildProjectNameRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameResponse>;
    /**
     * getBuildProjectNameRepositoryName - List of all architectures the specified project builds against a given repository.
     *
     * List of all architectures the specified project builds against a given repository.
    **/
    getBuildProjectNameRepositoryName(req: operations.GetBuildProjectNameRepositoryNameRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameRepositoryNameResponse>;
    /**
     * getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfo - Show the build dependencies of packages that are part of the project.
     *
     * Show the build dependencies of packages that are part of the project, for a given repository and architecture.
     *
    **/
    getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfo(req: operations.GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse>;
    /**
     * getBuildProjectNameRepositoryNameArchitectureNamePackageName - List binaries built by the sources of the specified package.
     *
     * List binaries built by the sources of the specified package.
    **/
    getBuildProjectNameRepositoryNameArchitectureNamePackageName(req: operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameResponse>;
    /**
     * getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatus - Show the build status of a currently running build job.
     *
     * Show the build status of a currently running build job. Shows an empty result if no build job is running.
     *
    **/
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatus(req: operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusResponse>;
    /**
     * getBuildProjectNameRepositoryNameArchitectureNamePackageNameReason - Show the reason for the lastly triggered build.
     *
     * Details about the reason of the lastly triggered build.
    **/
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameReason(req: operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonResponse>;
    /**
     * getBuildProjectNameRepositoryNameArchitectureNameRepository - List all binaries (produced by all packages of the given project).
     *
     * List all binaries (produced by all packages of the given project) for the specified repository and architecture.
     *
    **/
    getBuildProjectNameRepositoryNameArchitectureNameRepository(req: operations.GetBuildProjectNameRepositoryNameArchitectureNameRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameRepositoryNameArchitectureNameRepositoryResponse>;
    /**
     * getBuildProjectNameRepositoryNameBuildconfig - Show the build configuration for the specified repository.
     *
     * Show the build configuration for the specified repository. Includes all base package requirements, mappings and macros.
     *
    **/
    getBuildProjectNameRepositoryNameBuildconfig(req: operations.GetBuildProjectNameRepositoryNameBuildconfigRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameRepositoryNameBuildconfigResponse>;
    /**
     * getBuildProjectNameResult - Get the build results for packages, architectures and repositories of the specified project.
     *
     * Get the build results for packages, architectures and repositories of the specified project.
    **/
    getBuildProjectNameResult(req: operations.GetBuildProjectNameResultRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectNameResultResponse>;
    /**
     * postBuildProjectName - Apply different actions on builds/build processes of the specified project
     *
     * Apply different actions on builds/build processes of the specified project
    **/
    postBuildProjectName(req: operations.PostBuildProjectNameRequest, config?: AxiosRequestConfig): Promise<operations.PostBuildProjectNameResponse>;
    /**
     * getBuildProjectRepositoryArchPackageBuildinfo - This endpoint returns information about some specific artifact
    **/
    getBuildProjectRepositoryArchPackageBuildinfo(req: operations.GetBuildProjectRepositoryArchPackageBuildinfoRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectRepositoryArchPackageBuildinfoResponse>;
    /**
     * getBuildProjectRepositoryArchPackageHistory - This endpoint returns the build history for a specific artifact
    **/
    getBuildProjectRepositoryArchPackageHistory(req: operations.GetBuildProjectRepositoryArchPackageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectRepositoryArchPackageHistoryResponse>;
    /**
     * getBuildProjectRepositoryArchPackageLog - This endpoint returns the last log file for a specific build artifact
    **/
    getBuildProjectRepositoryArchPackageLog(req: operations.GetBuildProjectRepositoryArchPackageLogRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectRepositoryArchPackageLogResponse>;
    /**
     * getBuildProjectRepositoryArchPackageStatus - This endpoint returns the building status for a specific artifact
    **/
    getBuildProjectRepositoryArchPackageStatus(req: operations.GetBuildProjectRepositoryArchPackageStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectRepositoryArchPackageStatusResponse>;
    /**
     * getBuildProjectRepositoryArchitecturePackageFile - Return a specific artifact file contents
     *
     * Given a project, repository, architecture and package, retrieve the given file's content.
     *
    **/
    getBuildProjectRepositoryArchitecturePackageFile(req: operations.GetBuildProjectRepositoryArchitecturePackageFileRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectRepositoryArchitecturePackageFileResponse>;
    /**
     * getBuildProjectRepositoryArchitecturePackageFileViewFileinfo - This endpoint returns details about an specific artifact
     *
     * Given a project, repository, architecture and package, retrieve the given artifact's details.
     *
    **/
    getBuildProjectRepositoryArchitecturePackageFileViewFileinfo(req: operations.GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse>;
    /**
     * putBuildProjectRepositoryArchitecturePackageFile - Update a specific artifact file contents
     *
     * Given a project, repository, architecture and package, update the given file's content.
     *
     * This is for Admins only.
     *
    **/
    putBuildProjectRepositoryArchitecturePackageFile(req: operations.PutBuildProjectRepositoryArchitecturePackageFileRequest, config?: AxiosRequestConfig): Promise<operations.PutBuildProjectRepositoryArchitecturePackageFileResponse>;
}
