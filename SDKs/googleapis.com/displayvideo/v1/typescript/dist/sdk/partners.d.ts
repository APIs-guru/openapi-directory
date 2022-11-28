import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Partners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * displayvideoPartnersBulkEditPartnerAssignedTargetingOptions - Bulk edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
    **/
    displayvideoPartnersBulkEditPartnerAssignedTargetingOptions(req: operations.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsResponse>;
    /**
     * displayvideoPartnersChannelsCreate - Creates a new channel. Returns the newly created channel if successful.
    **/
    displayvideoPartnersChannelsCreate(req: operations.DisplayvideoPartnersChannelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersChannelsCreateResponse>;
    /**
     * displayvideoPartnersChannelsList - Lists channels for a partner or advertiser.
    **/
    displayvideoPartnersChannelsList(req: operations.DisplayvideoPartnersChannelsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersChannelsListResponse>;
    /**
     * displayvideoPartnersChannelsPatch - Updates a channel. Returns the updated channel if successful.
    **/
    displayvideoPartnersChannelsPatch(req: operations.DisplayvideoPartnersChannelsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersChannelsPatchResponse>;
    /**
     * displayvideoPartnersChannelsSitesBulkEdit - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
    **/
    displayvideoPartnersChannelsSitesBulkEdit(req: operations.DisplayvideoPartnersChannelsSitesBulkEditRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersChannelsSitesBulkEditResponse>;
    /**
     * displayvideoPartnersChannelsSitesDelete - Deletes a site from a channel.
    **/
    displayvideoPartnersChannelsSitesDelete(req: operations.DisplayvideoPartnersChannelsSitesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersChannelsSitesDeleteResponse>;
    /**
     * displayvideoPartnersChannelsSitesList - Lists sites in a channel.
    **/
    displayvideoPartnersChannelsSitesList(req: operations.DisplayvideoPartnersChannelsSitesListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersChannelsSitesListResponse>;
    /**
     * displayvideoPartnersChannelsSitesReplace - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
    **/
    displayvideoPartnersChannelsSitesReplace(req: operations.DisplayvideoPartnersChannelsSitesReplaceRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersChannelsSitesReplaceResponse>;
    /**
     * displayvideoPartnersGet - Gets a partner.
    **/
    displayvideoPartnersGet(req: operations.DisplayvideoPartnersGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersGetResponse>;
    /**
     * displayvideoPartnersList - Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
    **/
    displayvideoPartnersList(req: operations.DisplayvideoPartnersListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersListResponse>;
    /**
     * displayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate - Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
    **/
    displayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate(req: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse>;
    /**
     * displayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete - Deletes an assigned targeting option from a partner.
    **/
    displayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete(req: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse>;
    /**
     * displayvideoPartnersTargetingTypesAssignedTargetingOptionsGet - Gets a single targeting option assigned to a partner.
    **/
    displayvideoPartnersTargetingTypesAssignedTargetingOptionsGet(req: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse>;
    /**
     * displayvideoPartnersTargetingTypesAssignedTargetingOptionsList - Lists the targeting options assigned to a partner.
    **/
    displayvideoPartnersTargetingTypesAssignedTargetingOptionsList(req: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse>;
}
