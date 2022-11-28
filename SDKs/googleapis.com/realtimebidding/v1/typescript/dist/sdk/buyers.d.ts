import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Buyers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * realtimebiddingBuyersCreativesCreate - Creates a creative.
    **/
    realtimebiddingBuyersCreativesCreate(req: operations.RealtimebiddingBuyersCreativesCreateRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBuyersCreativesCreateResponse>;
    /**
     * realtimebiddingBuyersCreativesList - Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.
    **/
    realtimebiddingBuyersCreativesList(req: operations.RealtimebiddingBuyersCreativesListRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBuyersCreativesListResponse>;
    /**
     * realtimebiddingBuyersCreativesPatch - Updates a creative.
    **/
    realtimebiddingBuyersCreativesPatch(req: operations.RealtimebiddingBuyersCreativesPatchRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBuyersCreativesPatchResponse>;
    /**
     * realtimebiddingBuyersList - Lists all buyer account information the calling buyer user or service account is permissioned to manage.
    **/
    realtimebiddingBuyersList(req: operations.RealtimebiddingBuyersListRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBuyersListResponse>;
    /**
     * realtimebiddingBuyersUserListsClose - Change the status of a user list to CLOSED. This prevents new users from being added to the user list.
    **/
    realtimebiddingBuyersUserListsClose(req: operations.RealtimebiddingBuyersUserListsCloseRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBuyersUserListsCloseResponse>;
    /**
     * realtimebiddingBuyersUserListsCreate - Create a new user list.
    **/
    realtimebiddingBuyersUserListsCreate(req: operations.RealtimebiddingBuyersUserListsCreateRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBuyersUserListsCreateResponse>;
    /**
     * realtimebiddingBuyersUserListsGet - Gets a user list by its name.
    **/
    realtimebiddingBuyersUserListsGet(req: operations.RealtimebiddingBuyersUserListsGetRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBuyersUserListsGetResponse>;
    /**
     * realtimebiddingBuyersUserListsGetRemarketingTag - Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
    **/
    realtimebiddingBuyersUserListsGetRemarketingTag(req: operations.RealtimebiddingBuyersUserListsGetRemarketingTagRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBuyersUserListsGetRemarketingTagResponse>;
    /**
     * realtimebiddingBuyersUserListsList - Lists the user lists visible to the current user.
    **/
    realtimebiddingBuyersUserListsList(req: operations.RealtimebiddingBuyersUserListsListRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBuyersUserListsListResponse>;
    /**
     * realtimebiddingBuyersUserListsOpen - Change the status of a user list to OPEN. This allows new users to be added to the user list.
    **/
    realtimebiddingBuyersUserListsOpen(req: operations.RealtimebiddingBuyersUserListsOpenRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBuyersUserListsOpenResponse>;
    /**
     * realtimebiddingBuyersUserListsUpdate - Update the given user list. Only user lists with URLRestrictions can be updated.
    **/
    realtimebiddingBuyersUserListsUpdate(req: operations.RealtimebiddingBuyersUserListsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBuyersUserListsUpdateResponse>;
}
