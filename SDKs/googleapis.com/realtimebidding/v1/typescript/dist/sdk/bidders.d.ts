import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Bidders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * realtimebiddingBiddersCreativesWatch - Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
    **/
    realtimebiddingBiddersCreativesWatch(req: operations.RealtimebiddingBiddersCreativesWatchRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersCreativesWatchResponse>;
    /**
     * realtimebiddingBiddersEndpointsList - Lists all the bidder's endpoints.
    **/
    realtimebiddingBiddersEndpointsList(req: operations.RealtimebiddingBiddersEndpointsListRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersEndpointsListResponse>;
    /**
     * realtimebiddingBiddersList - Lists all the bidder accounts that belong to the caller.
    **/
    realtimebiddingBiddersList(req: operations.RealtimebiddingBiddersListRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersListResponse>;
    /**
     * realtimebiddingBiddersPretargetingConfigsActivate - Activates a pretargeting configuration.
    **/
    realtimebiddingBiddersPretargetingConfigsActivate(req: operations.RealtimebiddingBiddersPretargetingConfigsActivateRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsActivateResponse>;
    /**
     * realtimebiddingBiddersPretargetingConfigsAddTargetedApps - Adds targeted apps to the pretargeting configuration.
    **/
    realtimebiddingBiddersPretargetingConfigsAddTargetedApps(req: operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse>;
    /**
     * realtimebiddingBiddersPretargetingConfigsAddTargetedPublishers - Adds targeted publishers to the pretargeting config.
    **/
    realtimebiddingBiddersPretargetingConfigsAddTargetedPublishers(req: operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse>;
    /**
     * realtimebiddingBiddersPretargetingConfigsAddTargetedSites - Adds targeted sites to the pretargeting configuration.
    **/
    realtimebiddingBiddersPretargetingConfigsAddTargetedSites(req: operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse>;
    /**
     * realtimebiddingBiddersPretargetingConfigsCreate - Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.
    **/
    realtimebiddingBiddersPretargetingConfigsCreate(req: operations.RealtimebiddingBiddersPretargetingConfigsCreateRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsCreateResponse>;
    /**
     * realtimebiddingBiddersPretargetingConfigsDelete - Deletes a pretargeting configuration.
    **/
    realtimebiddingBiddersPretargetingConfigsDelete(req: operations.RealtimebiddingBiddersPretargetingConfigsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsDeleteResponse>;
    /**
     * realtimebiddingBiddersPretargetingConfigsList - Lists all pretargeting configurations for a single bidder.
    **/
    realtimebiddingBiddersPretargetingConfigsList(req: operations.RealtimebiddingBiddersPretargetingConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsListResponse>;
    /**
     * realtimebiddingBiddersPretargetingConfigsRemoveTargetedApps - Removes targeted apps from the pretargeting configuration.
    **/
    realtimebiddingBiddersPretargetingConfigsRemoveTargetedApps(req: operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsResponse>;
    /**
     * realtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers - Removes targeted publishers from the pretargeting config.
    **/
    realtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers(req: operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersResponse>;
    /**
     * realtimebiddingBiddersPretargetingConfigsRemoveTargetedSites - Removes targeted sites from the pretargeting configuration.
    **/
    realtimebiddingBiddersPretargetingConfigsRemoveTargetedSites(req: operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse>;
    /**
     * realtimebiddingBiddersPretargetingConfigsSuspend - Suspends a pretargeting configuration.
    **/
    realtimebiddingBiddersPretargetingConfigsSuspend(req: operations.RealtimebiddingBiddersPretargetingConfigsSuspendRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsSuspendResponse>;
    /**
     * realtimebiddingBiddersPublisherConnectionsBatchApprove - Batch approves multiple publisher connections.
    **/
    realtimebiddingBiddersPublisherConnectionsBatchApprove(req: operations.RealtimebiddingBiddersPublisherConnectionsBatchApproveRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPublisherConnectionsBatchApproveResponse>;
    /**
     * realtimebiddingBiddersPublisherConnectionsBatchReject - Batch rejects multiple publisher connections.
    **/
    realtimebiddingBiddersPublisherConnectionsBatchReject(req: operations.RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse>;
    /**
     * realtimebiddingBiddersPublisherConnectionsList - Lists publisher connections for a given bidder.
    **/
    realtimebiddingBiddersPublisherConnectionsList(req: operations.RealtimebiddingBiddersPublisherConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPublisherConnectionsListResponse>;
}
