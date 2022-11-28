import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PublishedBinaries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPublished - List all the published projects.
     *
     * Get a list of all the projects, all of them are considered published.
     *
    **/
    getPublished(req: operations.GetPublishedRequest, config?: AxiosRequestConfig): Promise<operations.GetPublishedResponse>;
    /**
     * getPublishedProjectName - List the repositories of a project with published binaries
     *
     * Get a list of the repositories of the project that already have published binaries.
     *
    **/
    getPublishedProjectName(req: operations.GetPublishedProjectNameRequest, config?: AxiosRequestConfig): Promise<operations.GetPublishedProjectNameResponse>;
    /**
     * getPublishedProjectNameRepositoryName - List the content of the directory tree where the binaries are published at the level project/repository.
     *
     * Get a list of architectures' directories and other files (.repo, .ymp, etc.) present at the level project/repository of the directory tree where the published binaries are stored.
     *
    **/
    getPublishedProjectNameRepositoryName(req: operations.GetPublishedProjectNameRepositoryNameRequest, config?: AxiosRequestConfig): Promise<operations.GetPublishedProjectNameRepositoryNameResponse>;
    /**
     * getPublishedProjectNameRepositoryNameArchitectureName - List the content of the directory tree where the binaries are published at the level project/repository/architecture.
     *
     * Get a list of binaries and other files present at the level project/repository/architecture of the directory tree as a result of successful building and publishing processes.
     *
    **/
    getPublishedProjectNameRepositoryNameArchitectureName(req: operations.GetPublishedProjectNameRepositoryNameArchitectureNameRequest, config?: AxiosRequestConfig): Promise<operations.GetPublishedProjectNameRepositoryNameArchitectureNameResponse>;
    /**
     * getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename - Return the binary file itself.
     *
     * Allow to download the binary file that was published and stored under the directory given by project/repository/architecture/.
     * Can response with Media Types like application/x-rpm, text/xml, etc.
     * NOTE: Use this only if you absolutely have to, as it doesn't use the redirector.
     *
    **/
    getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename(req: operations.GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRequest, config?: AxiosRequestConfig): Promise<operations.GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse>;
    /**
     * getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmp - Generate a ymp pattern that includes the needed repositories to install the given binary.
     *
     * Generate a ymp pattern, which contains the list of packages needed for intalling certain software without having to create dependencies between them.
     * Read more about patterns [in this tutorial](https://en.opensuse.org/openSUSE:Build_Service_Tutorial#Create_Patterns).
     *
    **/
    getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmp(req: operations.GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpRequest, config?: AxiosRequestConfig): Promise<operations.GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpResponse>;
    /**
     * getPublishedProjectNameRepositoryNameViewEqualStatus - Present information about the last publication of the pair project and repository.
     *
     * Get information about the build process (build id, start time, etc.) for the pair project and repository.
     *
    **/
    getPublishedProjectNameRepositoryNameViewEqualStatus(req: operations.GetPublishedProjectNameRepositoryNameViewEqualStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetPublishedProjectNameRepositoryNameViewEqualStatusResponse>;
}
