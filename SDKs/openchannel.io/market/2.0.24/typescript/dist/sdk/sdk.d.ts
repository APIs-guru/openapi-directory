import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://market.openchannel.io/v2"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deleteAppsAppId - Removes app and all versions
     *
     * - This method is called on behalf of a developer.
     *
    **/
    deleteAppsAppId(req: operations.DeleteAppsAppIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsAppIdResponse>;
    /**
     * deleteAppsAppIdVersionsVersion - Removes AppVersion
     *
     * - This method is called on behalf of a developer.
     *
    **/
    deleteAppsAppIdVersionsVersion(req: operations.DeleteAppsAppIdVersionsVersionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsAppIdVersionsVersionResponse>;
    /**
     * deleteDeveloperAccountsDeveloperAccountId - Removes the developer account
    **/
    deleteDeveloperAccountsDeveloperAccountId(req: operations.DeleteDeveloperAccountsDeveloperAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeveloperAccountsDeveloperAccountIdResponse>;
    /**
     * deleteDevelopersDeveloperId - Removes a single developer
    **/
    deleteDevelopersDeveloperId(req: operations.DeleteDevelopersDeveloperIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDevelopersDeveloperIdResponse>;
    /**
     * deletePermissionAppsAppId - Removes permission that allows the app to access this user's data
    **/
    deletePermissionAppsAppId(req: operations.DeletePermissionAppsAppIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionAppsAppIdResponse>;
    /**
     * deleteReviewsReviewId - Remove a review
     *
     * - Only the review author is able to remove their review
     *
    **/
    deleteReviewsReviewId(req: operations.DeleteReviewsReviewIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReviewsReviewIdResponse>;
    /**
     * deleteStripeGatewayDeveloperDeveloperIdAccountsStripeId - Disconnects a developer's Stripe account
     *
     *
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    deleteStripeGatewayDeveloperDeveloperIdAccountsStripeId(req: operations.DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdResponse>;
    /**
     * deleteStripeGatewayUserUserIdCardsCardId - Removes a credit card for a user
    **/
    deleteStripeGatewayUserUserIdCardsCardId(req: operations.DeleteStripeGatewayUserUserIdCardsCardIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStripeGatewayUserUserIdCardsCardIdResponse>;
    /**
     * deleteTransactionsTransactionId - Deleted a transaction
     *
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    deleteTransactionsTransactionId(req: operations.DeleteTransactionsTransactionIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTransactionsTransactionIdResponse>;
    /**
     * deleteUserAccountsUserAccountId - Removes the user account
    **/
    deleteUserAccountsUserAccountId(req: operations.DeleteUserAccountsUserAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserAccountsUserAccountIdResponse>;
    /**
     * deleteUsersUserId - Removes a single user
     *
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    deleteUsersUserId(req: operations.DeleteUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersUserIdResponse>;
    /**
     * getApps - Returns a paginated list of APPROVED or SUSPENDED apps
     *
     * - Results are paginated and the default is value is 1000 if no limit is provided
     * - If no query is specified, returns all APPROVED or SUSPENDED apps within the marketplace
     *
    **/
    getApps(req: operations.GetAppsRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsResponse>;
    /**
     * getAppsAppId - Returns a single APPROVED or SUSPENDED app
     *
     * - A 'view' event is recorded when trackViews is set to true
     *
    **/
    getAppsAppId(req: operations.GetAppsAppIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdResponse>;
    /**
     * getAppsAppIdVersionsVersion - Returns a single AppVersion
     *
     * - Only returns AppVersions owned by this developer
     *
    **/
    getAppsAppIdVersionsVersion(req: operations.GetAppsAppIdVersionsVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdVersionsVersionResponse>;
    /**
     * getAppsBySafeNameSafeName - Returns a single APPROVED or SUSPENDED app
     *
     * - A 'view' event is recorded when trackViews is set to true
     *
    **/
    getAppsBySafeNameSafeName(req: operations.GetAppsBySafeNameSafeNameRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsBySafeNameSafeNameResponse>;
    /**
     * getAppsTextSearch - Searches through the text of fields to find APPROVED or SUSPENDED apps
     *
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    getAppsTextSearch(req: operations.GetAppsTextSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsTextSearchResponse>;
    /**
     * getAppsVersions - Returns a paginated list of AppVersions
     *
     * - Results are paginated when limit is set, otherwise all results are returned
     * - If no query is specified, returns all AppVersions within the marketplace
     * - Only returns AppVersions owned by this developer
     *
    **/
    getAppsVersions(req: operations.GetAppsVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsVersionsResponse>;
    /**
     * getDeveloperAccounts - Returns a paginated list of developerAccounts
     *
     * - Results are paginated and the default is value is 1000 if no limit is provided
     *
    **/
    getDeveloperAccounts(req: operations.GetDeveloperAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeveloperAccountsResponse>;
    /**
     * getDeveloperAccountsDeveloperAccountId - Returns a single developer account
    **/
    getDeveloperAccountsDeveloperAccountId(req: operations.GetDeveloperAccountsDeveloperAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDeveloperAccountsDeveloperAccountIdResponse>;
    /**
     * getDevelopers - Returns a paginated list of developers
     *
     * - Results are paginated and the default is value is 100 if no limit is provided
     *
    **/
    getDevelopers(req: operations.GetDevelopersRequest, config?: AxiosRequestConfig): Promise<operations.GetDevelopersResponse>;
    /**
     * getDevelopersDeveloperId - Returns a single developer
    **/
    getDevelopersDeveloperId(req: operations.GetDevelopersDeveloperIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDevelopersDeveloperIdResponse>;
    /**
     * getEventsEventId - Returns an event
     *
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    getEventsEventId(req: operations.GetEventsEventIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsEventIdResponse>;
    /**
     * getFiles - Returns a paginated list of files
    **/
    getFiles(req: operations.GetFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesResponse>;
    /**
     * getFilesByIdOrUrl - Get the details for a file.
    **/
    getFilesByIdOrUrl(req: operations.GetFilesByIdOrUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesByIdOrUrlResponse>;
    /**
     * getFilesDownload - A signed URL for downloading a private file can be returned by providing the fileId.
    **/
    getFilesDownload(req: operations.GetFilesDownloadRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesDownloadResponse>;
    /**
     * getMarketsThis - Returns the current marketplace
    **/
    getMarketsThis(config?: AxiosRequestConfig): Promise<operations.GetMarketsThisResponse>;
    /**
     * getOwnership - Returns a paginated list of app licenses
     *
     *  - Results are returned for the market provided within the basic authentication credentials
    **/
    getOwnership(req: operations.GetOwnershipRequest, config?: AxiosRequestConfig): Promise<operations.GetOwnershipResponse>;
    /**
     * getOwnershipOwnershipId - Returns an ownership record
     *
     *  - Results are returned for the market provided within the basic authentication credentials
    **/
    getOwnershipOwnershipId(req: operations.GetOwnershipOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOwnershipOwnershipIdResponse>;
    /**
     * getPermissionAppsAppId - Returns permission that allows the app to access this user's data
    **/
    getPermissionAppsAppId(req: operations.GetPermissionAppsAppIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionAppsAppIdResponse>;
    /**
     * getReviews - Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set
     *
     * - Results are paginated and the default is value is 100 if no limit is provided
     *
    **/
    getReviews(req: operations.GetReviewsRequest, config?: AxiosRequestConfig): Promise<operations.GetReviewsResponse>;
    /**
     * getReviewsReviewId - Find a Review within a particular App and marketplace
    **/
    getReviewsReviewId(req: operations.GetReviewsReviewIdRequest, config?: AxiosRequestConfig): Promise<operations.GetReviewsReviewIdResponse>;
    /**
     * getStatsSeriesPeriodFields - Return a timeseries for a particular field
     *
     * Return a timeseries nested array containing date and value. Example: [[1406520000000,2],[1406606400000,34],[1406692800000,245],...]
    **/
    getStatsSeriesPeriodFields(req: operations.GetStatsSeriesPeriodFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetStatsSeriesPeriodFieldsResponse>;
    /**
     * getStatsTotal - Returns the total number of events for a particular field.
    **/
    getStatsTotal(req: operations.GetStatsTotalRequest, config?: AxiosRequestConfig): Promise<operations.GetStatsTotalResponse>;
    /**
     * getStripeGatewayDeveloperDeveloperIdAccounts - Returns a developers connected Stripe accounts
     *
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    getStripeGatewayDeveloperDeveloperIdAccounts(req: operations.GetStripeGatewayDeveloperDeveloperIdAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetStripeGatewayDeveloperDeveloperIdAccountsResponse>;
    /**
     * getStripeGatewayUserUserIdCards - Returns credit cards for this user
     *
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    getStripeGatewayUserUserIdCards(req: operations.GetStripeGatewayUserUserIdCardsRequest, config?: AxiosRequestConfig): Promise<operations.GetStripeGatewayUserUserIdCardsResponse>;
    /**
     * getTransactions - Returns a paginated list of transactions
     *
     * - Results are paginated and the default is value is 100 if no limit is provided
     *
    **/
    getTransactions(req: operations.GetTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsResponse>;
    /**
     * getTransactionsTransactionId - Returns a transaction
     *
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    getTransactionsTransactionId(req: operations.GetTransactionsTransactionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsTransactionIdResponse>;
    /**
     * getUserAccounts - Returns a paginated list of userAccounts
     *
     * - Results are paginated and the default is value is 1000 if no limit is provided
     *
    **/
    getUserAccounts(req: operations.GetUserAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserAccountsResponse>;
    /**
     * getUserAccountsUserAccountId - Returns a single user account
    **/
    getUserAccountsUserAccountId(req: operations.GetUserAccountsUserAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserAccountsUserAccountIdResponse>;
    /**
     * getUsers - Returns a paginated list of users
     *
     * - Results are paginated and the default is value is 100 if no limit is provided
     *
    **/
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * getUsersUserId - Return a single user
     *
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    getUsersUserId(req: operations.GetUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdResponse>;
    /**
     * patchAppsAppIdVersionsVersion - Updates the app fields or creates a new version
     *
     * - This method is called on behalf of a developer.
     * - Price and is required if the model is 'single' or 'recurring'
     * - Returns the newly updated app
     * - This endpoint updates only the fields provided in the request (relative update). In contrast, the POST version of this method replaces the entire object to match the request (absolute update).
     *
    **/
    patchAppsAppIdVersionsVersion(req: operations.PatchAppsAppIdVersionsVersionRequest, config?: AxiosRequestConfig): Promise<operations.PatchAppsAppIdVersionsVersionResponse>;
    /**
     * patchDeveloperAccountsDeveloperAccountId - Updates the developer account fields
    **/
    patchDeveloperAccountsDeveloperAccountId(req: operations.PatchDeveloperAccountsDeveloperAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchDeveloperAccountsDeveloperAccountIdResponse>;
    /**
     * patchDevelopersDeveloperId - Updates the developer fields
    **/
    patchDevelopersDeveloperId(req: operations.PatchDevelopersDeveloperIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchDevelopersDeveloperIdResponse>;
    /**
     * patchOwnershipOwnershipId - Updates ownership fields
     *
     *  - Results are returned for the market provided within the basic authentication credentials
    **/
    patchOwnershipOwnershipId(req: operations.PatchOwnershipOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchOwnershipOwnershipIdResponse>;
    /**
     * patchReviewsReviewId - Update a review fields
     *
     * - Only the review author is able to update their review
     * - Returns the newly updated review
     *
    **/
    patchReviewsReviewId(req: operations.PatchReviewsReviewIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchReviewsReviewIdResponse>;
    /**
     * patchUserAccountsUserAccountId - Updates the user account fields
    **/
    patchUserAccountsUserAccountId(req: operations.PatchUserAccountsUserAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchUserAccountsUserAccountIdResponse>;
    /**
     * patchUsersUserId - Updates user fields
    **/
    patchUsersUserId(req: operations.PatchUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchUsersUserIdResponse>;
    /**
     * postApps - Adds a new app for this developer
     *
     * - This method is called on behalf of a developer.
     * - Price is required if the model is 'single' or 'recurring'
     * - Returns the newly created app
     *
    **/
    postApps(req: operations.PostAppsRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsResponse>;
    /**
     * postAppsAppIdLive - Change the live app to another, previously approved version
     *
     * - This method is called on behalf of a developer.
     *
    **/
    postAppsAppIdLive(req: operations.PostAppsAppIdLiveRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdLiveResponse>;
    /**
     * postAppsAppIdPublish - Publishes the current working version of the app to the marketplace
     *
     * - This method is called on behalf of a developer.
     * - Only effects the current working version of the app.
     *
    **/
    postAppsAppIdPublish(req: operations.PostAppsAppIdPublishRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdPublishResponse>;
    /**
     * postAppsAppIdVersionsVersion - Updates the app or creates a new version
     *
     * - This method is called on behalf of a developer.
     * - Price and is required if the model is 'single' or 'recurring'
     * - Returns the newly updated app
     * - This endpoint replaces the entire object to match the request (absolute update). In contrast, the PATCH version of this endpoint updates only the fields provided in the request (relative update).
     *
    **/
    postAppsAppIdVersionsVersion(req: operations.PostAppsAppIdVersionsVersionRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdVersionsVersionResponse>;
    /**
     * postAppsAppIdVersionsVersionStatus - Allows a developer or administrator to change the status of apps
     *
     * Only certain status changes are allowed. For instance, a developer is only able to suspend and unsuspend their app (which must already be approved). See here for a state change diagram of allowed status changes for administrators: https://support.openchannel.io/documentation/api/#415-apps-status-change
     *
    **/
    postAppsAppIdVersionsVersionStatus(req: operations.PostAppsAppIdVersionsVersionStatusRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdVersionsVersionStatusResponse>;
    /**
     * postCustomGatewayPaymentOwnershipId - Adds a payment for an app on behalf of a user
     *
     * - Results are returned for the market provided within the basic authentication credentials
     * - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
     *
    **/
    postCustomGatewayPaymentOwnershipId(req: operations.PostCustomGatewayPaymentOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomGatewayPaymentOwnershipIdResponse>;
    /**
     * postCustomGatewayRefundOwnershipId - Fully or partially refund payment for an app on behalf of a user
     *
     * - Results are returned for the market provided within the basic authentication credentials
     * - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
     *
    **/
    postCustomGatewayRefundOwnershipId(req: operations.PostCustomGatewayRefundOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomGatewayRefundOwnershipIdResponse>;
    /**
     * postDeveloperAccountsDeveloperAccountId - Updates the developer account or adds the developer account if it doesn't exist
    **/
    postDeveloperAccountsDeveloperAccountId(req: operations.PostDeveloperAccountsDeveloperAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.PostDeveloperAccountsDeveloperAccountIdResponse>;
    /**
     * postDevelopersDeveloperId - Updates the developer record or adds the developer if it doesn't exist
    **/
    postDevelopersDeveloperId(req: operations.PostDevelopersDeveloperIdRequest, config?: AxiosRequestConfig): Promise<operations.PostDevelopersDeveloperIdResponse>;
    /**
     * postFiles - Uploads a file.
     *
     * - WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days.
     * - This method is called on behalf of a developer.
     *
    **/
    postFiles(req: operations.PostFilesRequest, config?: AxiosRequestConfig): Promise<operations.PostFilesResponse>;
    /**
     * postFilesUrl - Uploads a file from a URL
     *
     * - WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days.
     * - This method is called on behalf of a developer.
     *
    **/
    postFilesUrl(req: operations.PostFilesUrlRequest, config?: AxiosRequestConfig): Promise<operations.PostFilesUrlResponse>;
    /**
     * postOwnershipInstall - Aquires an app license for a user (installs app)
     *
     *  - This method is called on behalf of a user - This method requires either a modelId from the app or a custom model - User data and statistics are recorded when this method is called
    **/
    postOwnershipInstall(req: operations.PostOwnershipInstallRequest, config?: AxiosRequestConfig): Promise<operations.PostOwnershipInstallResponse>;
    /**
     * postOwnershipOwnershipId - Updates an ownership record
     *
     *  - Results are returned for the market provided within the basic authentication credentials
    **/
    postOwnershipOwnershipId(req: operations.PostOwnershipOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PostOwnershipOwnershipIdResponse>;
    /**
     * postOwnershipUninstallOwnershipId - Uninstalls a license for a particular user and app (uninstalls app)
     *
     *  - This method is called on behalf of a user - User data and statistics are recorded when this method is called
    **/
    postOwnershipUninstallOwnershipId(req: operations.PostOwnershipUninstallOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PostOwnershipUninstallOwnershipIdResponse>;
    /**
     * postPermissionAppsAppId - Adds permission to allow the app to access this user's data
    **/
    postPermissionAppsAppId(req: operations.PostPermissionAppsAppIdRequest, config?: AxiosRequestConfig): Promise<operations.PostPermissionAppsAppIdResponse>;
    /**
     * postReviews - Post a review from a User and returns the new post
     *
     * - Only authenticated users are able to post reviews
     * - Returns the newly created review
     *
    **/
    postReviews(req: operations.PostReviewsRequest, config?: AxiosRequestConfig): Promise<operations.PostReviewsResponse>;
    /**
     * postReviewsReviewId - Update a review from a User and returns the new post
     *
     * - Only the review author is able to update their review
     * - Returns the newly updated review
     *
    **/
    postReviewsReviewId(req: operations.PostReviewsReviewIdRequest, config?: AxiosRequestConfig): Promise<operations.PostReviewsReviewIdResponse>;
    /**
     * postStatsIncrementField - Increments a statistics field
     *
     * increment a statistics field
    **/
    postStatsIncrementField(req: operations.PostStatsIncrementFieldRequest, config?: AxiosRequestConfig): Promise<operations.PostStatsIncrementFieldResponse>;
    /**
     * postStripeGatewayDeveloperDeveloperIdAccounts - Generate a temporary URL to allow a developer to connect their Stripe account
     *
     * - Results are returned for the market provided within the basic authentication credentials
     * - The URL generated by this method is only valid for 48 hours.
     *
    **/
    postStripeGatewayDeveloperDeveloperIdAccounts(req: operations.PostStripeGatewayDeveloperDeveloperIdAccountsRequest, config?: AxiosRequestConfig): Promise<operations.PostStripeGatewayDeveloperDeveloperIdAccountsResponse>;
    /**
     * postStripeGatewayUserUserIdCards - Adds credit card for this user
     *
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    postStripeGatewayUserUserIdCards(req: operations.PostStripeGatewayUserUserIdCardsRequest, config?: AxiosRequestConfig): Promise<operations.PostStripeGatewayUserUserIdCardsResponse>;
    /**
     * postStripeGatewayUserUserIdCardsCardId - Updates a credit card for this user
     *
     *
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    postStripeGatewayUserUserIdCardsCardId(req: operations.PostStripeGatewayUserUserIdCardsCardIdRequest, config?: AxiosRequestConfig): Promise<operations.PostStripeGatewayUserUserIdCardsCardIdResponse>;
    /**
     * postTransactionsTransactionId - Updates a transaction
     *
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    postTransactionsTransactionId(req: operations.PostTransactionsTransactionIdRequest, config?: AxiosRequestConfig): Promise<operations.PostTransactionsTransactionIdResponse>;
    /**
     * postUserAccountsUserAccountId - Updates the user account or adds the user account if it doesn't exist
    **/
    postUserAccountsUserAccountId(req: operations.PostUserAccountsUserAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.PostUserAccountsUserAccountIdResponse>;
    /**
     * postUsersUserId - Updates a single user or adds the user if they don't exist
    **/
    postUsersUserId(req: operations.PostUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserIdResponse>;
}
export {};
