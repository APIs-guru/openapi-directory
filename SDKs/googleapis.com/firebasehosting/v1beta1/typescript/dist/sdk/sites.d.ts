import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sites {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * firebasehostingSitesChannelsCreate - Creates a new channel in the specified site.
    **/
    firebasehostingSitesChannelsCreate(req: operations.FirebasehostingSitesChannelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesChannelsCreateResponse>;
    /**
     * firebasehostingSitesChannelsList - Lists the channels for the specified site. All sites have a default `live` channel.
    **/
    firebasehostingSitesChannelsList(req: operations.FirebasehostingSitesChannelsListRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesChannelsListResponse>;
    /**
     * firebasehostingSitesDomainsCreate - Creates a domain mapping on the specified site.
    **/
    firebasehostingSitesDomainsCreate(req: operations.FirebasehostingSitesDomainsCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesDomainsCreateResponse>;
    /**
     * firebasehostingSitesDomainsGet - Gets a domain mapping on the specified site.
    **/
    firebasehostingSitesDomainsGet(req: operations.FirebasehostingSitesDomainsGetRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesDomainsGetResponse>;
    /**
     * firebasehostingSitesDomainsList - Lists the domains for the specified site.
    **/
    firebasehostingSitesDomainsList(req: operations.FirebasehostingSitesDomainsListRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesDomainsListResponse>;
    /**
     * firebasehostingSitesDomainsUpdate - Updates the specified domain mapping, creating the mapping as if it does not exist.
    **/
    firebasehostingSitesDomainsUpdate(req: operations.FirebasehostingSitesDomainsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesDomainsUpdateResponse>;
    /**
     * firebasehostingSitesReleasesCreate - Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
    **/
    firebasehostingSitesReleasesCreate(req: operations.FirebasehostingSitesReleasesCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesReleasesCreateResponse>;
    /**
     * firebasehostingSitesReleasesList - Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
    **/
    firebasehostingSitesReleasesList(req: operations.FirebasehostingSitesReleasesListRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesReleasesListResponse>;
    /**
     * firebasehostingSitesVersionsClone - Creates a new version on the specified target site using the content of the specified version.
    **/
    firebasehostingSitesVersionsClone(req: operations.FirebasehostingSitesVersionsCloneRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesVersionsCloneResponse>;
    /**
     * firebasehostingSitesVersionsCreate - Creates a new version for the specified site.
    **/
    firebasehostingSitesVersionsCreate(req: operations.FirebasehostingSitesVersionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesVersionsCreateResponse>;
    /**
     * firebasehostingSitesVersionsDelete - Deletes the specified version.
    **/
    firebasehostingSitesVersionsDelete(req: operations.FirebasehostingSitesVersionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesVersionsDeleteResponse>;
    /**
     * firebasehostingSitesVersionsFilesList - Lists the remaining files to be uploaded for the specified version.
    **/
    firebasehostingSitesVersionsFilesList(req: operations.FirebasehostingSitesVersionsFilesListRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesVersionsFilesListResponse>;
    /**
     * firebasehostingSitesVersionsList - Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
    **/
    firebasehostingSitesVersionsList(req: operations.FirebasehostingSitesVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesVersionsListResponse>;
    /**
     * firebasehostingSitesVersionsPatch -  Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
    **/
    firebasehostingSitesVersionsPatch(req: operations.FirebasehostingSitesVersionsPatchRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesVersionsPatchResponse>;
    /**
     * firebasehostingSitesVersionsPopulateFiles -  Adds content files to the specified version. Each file must be under 2 GB.
    **/
    firebasehostingSitesVersionsPopulateFiles(req: operations.FirebasehostingSitesVersionsPopulateFilesRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesVersionsPopulateFilesResponse>;
}
