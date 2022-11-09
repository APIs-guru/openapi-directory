import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * - This method is called on behalf of a developer.
     *
    **/
    DeleteAppsAppId(req: operations.DeleteAppsAppIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsAppIdResponse>;
    /**
     * - This method is called on behalf of a developer.
     *
    **/
    DeleteAppsAppIdVersionsVersion(req: operations.DeleteAppsAppIdVersionsVersionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsAppIdVersionsVersionResponse>;
    DeleteDeveloperAccountsDeveloperAccountId(req: operations.DeleteDeveloperAccountsDeveloperAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeveloperAccountsDeveloperAccountIdResponse>;
    DeleteDevelopersDeveloperId(req: operations.DeleteDevelopersDeveloperIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDevelopersDeveloperIdResponse>;
    DeletePermissionAppsAppId(req: operations.DeletePermissionAppsAppIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionAppsAppIdResponse>;
    /**
     * - Only the review author is able to remove their review
     *
    **/
    DeleteReviewsReviewId(req: operations.DeleteReviewsReviewIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReviewsReviewIdResponse>;
    /**
     *
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeId(req: operations.DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdResponse>;
    DeleteStripeGatewayUserUserIdCardsCardId(req: operations.DeleteStripeGatewayUserUserIdCardsCardIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStripeGatewayUserUserIdCardsCardIdResponse>;
    /**
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    DeleteTransactionsTransactionId(req: operations.DeleteTransactionsTransactionIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTransactionsTransactionIdResponse>;
    DeleteUserAccountsUserAccountId(req: operations.DeleteUserAccountsUserAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserAccountsUserAccountIdResponse>;
    /**
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    DeleteUsersUserId(req: operations.DeleteUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersUserIdResponse>;
    /**
     * - Results are paginated and the default is value is 1000 if no limit is provided
     * - If no query is specified, returns all APPROVED or SUSPENDED apps within the marketplace
     *
    **/
    GetApps(req: operations.GetAppsRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsResponse>;
    /**
     * - A 'view' event is recorded when trackViews is set to true
     *
    **/
    GetAppsAppId(req: operations.GetAppsAppIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdResponse>;
    /**
     * - Only returns AppVersions owned by this developer
     *
    **/
    GetAppsAppIdVersionsVersion(req: operations.GetAppsAppIdVersionsVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdVersionsVersionResponse>;
    /**
     * - A 'view' event is recorded when trackViews is set to true
     *
    **/
    GetAppsBySafeNameSafeName(req: operations.GetAppsBySafeNameSafeNameRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsBySafeNameSafeNameResponse>;
    /**
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    GetAppsTextSearch(req: operations.GetAppsTextSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsTextSearchResponse>;
    /**
     * - Results are paginated when limit is set, otherwise all results are returned
     * - If no query is specified, returns all AppVersions within the marketplace
     * - Only returns AppVersions owned by this developer
     *
    **/
    GetAppsVersions(req: operations.GetAppsVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsVersionsResponse>;
    /**
     * - Results are paginated and the default is value is 1000 if no limit is provided
     *
    **/
    GetDeveloperAccounts(req: operations.GetDeveloperAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeveloperAccountsResponse>;
    GetDeveloperAccountsDeveloperAccountId(req: operations.GetDeveloperAccountsDeveloperAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDeveloperAccountsDeveloperAccountIdResponse>;
    /**
     * - Results are paginated and the default is value is 100 if no limit is provided
     *
    **/
    GetDevelopers(req: operations.GetDevelopersRequest, config?: AxiosRequestConfig): Promise<operations.GetDevelopersResponse>;
    GetDevelopersDeveloperId(req: operations.GetDevelopersDeveloperIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDevelopersDeveloperIdResponse>;
    /**
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    GetEventsEventId(req: operations.GetEventsEventIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsEventIdResponse>;
    GetFiles(req: operations.GetFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesResponse>;
    GetFilesByIdOrUrl(req: operations.GetFilesByIdOrUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesByIdOrUrlResponse>;
    GetFilesDownload(req: operations.GetFilesDownloadRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesDownloadResponse>;
    GetMarketsThis(config?: AxiosRequestConfig): Promise<operations.GetMarketsThisResponse>;
    /**
     *  - Results are returned for the market provided within the basic authentication credentials
    **/
    GetOwnership(req: operations.GetOwnershipRequest, config?: AxiosRequestConfig): Promise<operations.GetOwnershipResponse>;
    /**
     *  - Results are returned for the market provided within the basic authentication credentials
    **/
    GetOwnershipOwnershipId(req: operations.GetOwnershipOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOwnershipOwnershipIdResponse>;
    GetPermissionAppsAppId(req: operations.GetPermissionAppsAppIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionAppsAppIdResponse>;
    /**
     * - Results are paginated and the default is value is 100 if no limit is provided
     *
    **/
    GetReviews(req: operations.GetReviewsRequest, config?: AxiosRequestConfig): Promise<operations.GetReviewsResponse>;
    GetReviewsReviewId(req: operations.GetReviewsReviewIdRequest, config?: AxiosRequestConfig): Promise<operations.GetReviewsReviewIdResponse>;
    /**
     * Return a timeseries nested array containing date and value. Example: [[1406520000000,2],[1406606400000,34],[1406692800000,245],...]
    **/
    GetStatsSeriesPeriodFields(req: operations.GetStatsSeriesPeriodFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetStatsSeriesPeriodFieldsResponse>;
    GetStatsTotal(req: operations.GetStatsTotalRequest, config?: AxiosRequestConfig): Promise<operations.GetStatsTotalResponse>;
    /**
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    GetStripeGatewayDeveloperDeveloperIdAccounts(req: operations.GetStripeGatewayDeveloperDeveloperIdAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetStripeGatewayDeveloperDeveloperIdAccountsResponse>;
    /**
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    GetStripeGatewayUserUserIdCards(req: operations.GetStripeGatewayUserUserIdCardsRequest, config?: AxiosRequestConfig): Promise<operations.GetStripeGatewayUserUserIdCardsResponse>;
    /**
     * - Results are paginated and the default is value is 100 if no limit is provided
     *
    **/
    GetTransactions(req: operations.GetTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsResponse>;
    /**
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    GetTransactionsTransactionId(req: operations.GetTransactionsTransactionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsTransactionIdResponse>;
    /**
     * - Results are paginated and the default is value is 1000 if no limit is provided
     *
    **/
    GetUserAccounts(req: operations.GetUserAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserAccountsResponse>;
    GetUserAccountsUserAccountId(req: operations.GetUserAccountsUserAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserAccountsUserAccountIdResponse>;
    /**
     * - Results are paginated and the default is value is 100 if no limit is provided
     *
    **/
    GetUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    GetUsersUserId(req: operations.GetUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdResponse>;
    /**
     * - This method is called on behalf of a developer.
     * - Price and is required if the model is 'single' or 'recurring'
     * - Returns the newly updated app
     * - This endpoint updates only the fields provided in the request (relative update). In contrast, the POST version of this method replaces the entire object to match the request (absolute update).
     *
    **/
    PatchAppsAppIdVersionsVersion(req: operations.PatchAppsAppIdVersionsVersionRequest, config?: AxiosRequestConfig): Promise<operations.PatchAppsAppIdVersionsVersionResponse>;
    PatchDeveloperAccountsDeveloperAccountId(req: operations.PatchDeveloperAccountsDeveloperAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchDeveloperAccountsDeveloperAccountIdResponse>;
    PatchDevelopersDeveloperId(req: operations.PatchDevelopersDeveloperIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchDevelopersDeveloperIdResponse>;
    /**
     *  - Results are returned for the market provided within the basic authentication credentials
    **/
    PatchOwnershipOwnershipId(req: operations.PatchOwnershipOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchOwnershipOwnershipIdResponse>;
    /**
     * - Only the review author is able to update their review
     * - Returns the newly updated review
     *
    **/
    PatchReviewsReviewId(req: operations.PatchReviewsReviewIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchReviewsReviewIdResponse>;
    PatchUserAccountsUserAccountId(req: operations.PatchUserAccountsUserAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchUserAccountsUserAccountIdResponse>;
    PatchUsersUserId(req: operations.PatchUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchUsersUserIdResponse>;
    /**
     * - This method is called on behalf of a developer.
     * - Price is required if the model is 'single' or 'recurring'
     * - Returns the newly created app
     *
    **/
    PostApps(req: operations.PostAppsRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsResponse>;
    /**
     * - This method is called on behalf of a developer.
     *
    **/
    PostAppsAppIdLive(req: operations.PostAppsAppIdLiveRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdLiveResponse>;
    /**
     * - This method is called on behalf of a developer.
     * - Only effects the current working version of the app.
     *
    **/
    PostAppsAppIdPublish(req: operations.PostAppsAppIdPublishRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdPublishResponse>;
    /**
     * - This method is called on behalf of a developer.
     * - Price and is required if the model is 'single' or 'recurring'
     * - Returns the newly updated app
     * - This endpoint replaces the entire object to match the request (absolute update). In contrast, the PATCH version of this endpoint updates only the fields provided in the request (relative update).
     *
    **/
    PostAppsAppIdVersionsVersion(req: operations.PostAppsAppIdVersionsVersionRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdVersionsVersionResponse>;
    /**
     * Only certain status changes are allowed. For instance, a developer is only able to suspend and unsuspend their app (which must already be approved). See here for a state change diagram of allowed status changes for administrators: https://support.openchannel.io/documentation/api/#415-apps-status-change
     *
    **/
    PostAppsAppIdVersionsVersionStatus(req: operations.PostAppsAppIdVersionsVersionStatusRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdVersionsVersionStatusResponse>;
    /**
     * - Results are returned for the market provided within the basic authentication credentials
     * - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
     *
    **/
    PostCustomGatewayPaymentOwnershipId(req: operations.PostCustomGatewayPaymentOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomGatewayPaymentOwnershipIdResponse>;
    /**
     * - Results are returned for the market provided within the basic authentication credentials
     * - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
     *
    **/
    PostCustomGatewayRefundOwnershipId(req: operations.PostCustomGatewayRefundOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomGatewayRefundOwnershipIdResponse>;
    PostDeveloperAccountsDeveloperAccountId(req: operations.PostDeveloperAccountsDeveloperAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.PostDeveloperAccountsDeveloperAccountIdResponse>;
    PostDevelopersDeveloperId(req: operations.PostDevelopersDeveloperIdRequest, config?: AxiosRequestConfig): Promise<operations.PostDevelopersDeveloperIdResponse>;
    /**
     * - WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days.
     * - This method is called on behalf of a developer.
     *
    **/
    PostFiles(req: operations.PostFilesRequest, config?: AxiosRequestConfig): Promise<operations.PostFilesResponse>;
    /**
     * - WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days.
     * - This method is called on behalf of a developer.
     *
    **/
    PostFilesUrl(req: operations.PostFilesUrlRequest, config?: AxiosRequestConfig): Promise<operations.PostFilesUrlResponse>;
    /**
     *  - This method is called on behalf of a user - This method requires either a modelId from the app or a custom model - User data and statistics are recorded when this method is called
    **/
    PostOwnershipInstall(req: operations.PostOwnershipInstallRequest, config?: AxiosRequestConfig): Promise<operations.PostOwnershipInstallResponse>;
    /**
     *  - Results are returned for the market provided within the basic authentication credentials
    **/
    PostOwnershipOwnershipId(req: operations.PostOwnershipOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PostOwnershipOwnershipIdResponse>;
    /**
     *  - This method is called on behalf of a user - User data and statistics are recorded when this method is called
    **/
    PostOwnershipUninstallOwnershipId(req: operations.PostOwnershipUninstallOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PostOwnershipUninstallOwnershipIdResponse>;
    PostPermissionAppsAppId(req: operations.PostPermissionAppsAppIdRequest, config?: AxiosRequestConfig): Promise<operations.PostPermissionAppsAppIdResponse>;
    /**
     * - Only authenticated users are able to post reviews
     * - Returns the newly created review
     *
    **/
    PostReviews(req: operations.PostReviewsRequest, config?: AxiosRequestConfig): Promise<operations.PostReviewsResponse>;
    /**
     * - Only the review author is able to update their review
     * - Returns the newly updated review
     *
    **/
    PostReviewsReviewId(req: operations.PostReviewsReviewIdRequest, config?: AxiosRequestConfig): Promise<operations.PostReviewsReviewIdResponse>;
    /**
     * increment a statistics field
    **/
    PostStatsIncrementField(req: operations.PostStatsIncrementFieldRequest, config?: AxiosRequestConfig): Promise<operations.PostStatsIncrementFieldResponse>;
    /**
     * - Results are returned for the market provided within the basic authentication credentials
     * - The URL generated by this method is only valid for 48 hours.
     *
    **/
    PostStripeGatewayDeveloperDeveloperIdAccounts(req: operations.PostStripeGatewayDeveloperDeveloperIdAccountsRequest, config?: AxiosRequestConfig): Promise<operations.PostStripeGatewayDeveloperDeveloperIdAccountsResponse>;
    /**
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    PostStripeGatewayUserUserIdCards(req: operations.PostStripeGatewayUserUserIdCardsRequest, config?: AxiosRequestConfig): Promise<operations.PostStripeGatewayUserUserIdCardsResponse>;
    /**
     *
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    PostStripeGatewayUserUserIdCardsCardId(req: operations.PostStripeGatewayUserUserIdCardsCardIdRequest, config?: AxiosRequestConfig): Promise<operations.PostStripeGatewayUserUserIdCardsCardIdResponse>;
    /**
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    PostTransactionsTransactionId(req: operations.PostTransactionsTransactionIdRequest, config?: AxiosRequestConfig): Promise<operations.PostTransactionsTransactionIdResponse>;
    PostUserAccountsUserAccountId(req: operations.PostUserAccountsUserAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.PostUserAccountsUserAccountIdResponse>;
    PostUsersUserId(req: operations.PostUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserIdResponse>;
}
export {};
