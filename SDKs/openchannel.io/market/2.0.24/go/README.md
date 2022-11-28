# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                BasicAuth: shared.SchemeBasicAuth{
                    Password: "YOUR_PASSWORD_HERE",
                    Username: "YOUR_USERNAME_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.DeleteAppsAppIDRequest{
        PathParams: operations.DeleteAppsAppIDPathParams{
            AppID: "at",
        },
        QueryParams: operations.DeleteAppsAppIDQueryParams{
            DeveloperID: "qui",
        },
    }
    
    res, err := s.Sdk.DeleteAppsAppID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `DeleteAppsAppID` - Removes app and all versions
* `DeleteAppsAppIDVersionsVersion` - Removes AppVersion
* `DeleteDeveloperAccountsDeveloperAccountID` - Removes the developer account
* `DeleteDevelopersDeveloperID` - Removes a single developer
* `DeletePermissionAppsAppID` - Removes permission that allows the app to access this user's data
* `DeleteReviewsReviewID` - Remove a review
* `DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeID` - Disconnects a developer's Stripe account
* `DeleteStripeGatewayUserUserIDCardsCardID` - Removes a credit card for a user
* `DeleteTransactionsTransactionID` - Deleted a transaction
* `DeleteUserAccountsUserAccountID` - Removes the user account
* `DeleteUsersUserID` - Removes a single user
* `GetApps` - Returns a paginated list of APPROVED or SUSPENDED apps
* `GetAppsAppID` - Returns a single APPROVED or SUSPENDED app
* `GetAppsAppIDVersionsVersion` - Returns a single AppVersion
* `GetAppsBySafeNameSafeName` - Returns a single APPROVED or SUSPENDED app
* `GetAppsTextSearch` - Searches through the text of fields to find APPROVED or SUSPENDED apps
* `GetAppsVersions` - Returns a paginated list of AppVersions
* `GetDeveloperAccounts` - Returns a paginated list of developerAccounts
* `GetDeveloperAccountsDeveloperAccountID` - Returns a single developer account
* `GetDevelopers` - Returns a paginated list of developers
* `GetDevelopersDeveloperID` - Returns a single developer
* `GetEventsEventID` - Returns an event
* `GetFiles` - Returns a paginated list of files
* `GetFilesByIDOrURL` - Get the details for a file.
* `GetFilesDownload` - A signed URL for downloading a private file can be returned by providing the fileId.
* `GetMarketsThis` - Returns the current marketplace
* `GetOwnership` - Returns a paginated list of app licenses
* `GetOwnershipOwnershipID` - Returns an ownership record
* `GetPermissionAppsAppID` - Returns permission that allows the app to access this user's data
* `GetReviews` - Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set
* `GetReviewsReviewID` - Find a Review within a particular App and marketplace
* `GetStatsSeriesPeriodFields` - Return a timeseries for a particular field
* `GetStatsTotal` - Returns the total number of events for a particular field.
* `GetStripeGatewayDeveloperDeveloperIDAccounts` - Returns a developers connected Stripe accounts
* `GetStripeGatewayUserUserIDCards` - Returns credit cards for this user
* `GetTransactions` - Returns a paginated list of transactions
* `GetTransactionsTransactionID` - Returns a transaction
* `GetUserAccounts` - Returns a paginated list of userAccounts
* `GetUserAccountsUserAccountID` - Returns a single user account
* `GetUsers` - Returns a paginated list of users
* `GetUsersUserID` - Return a single user
* `PatchAppsAppIDVersionsVersion` - Updates the app fields or creates a new version
* `PatchDeveloperAccountsDeveloperAccountID` - Updates the developer account fields
* `PatchDevelopersDeveloperID` - Updates the developer fields
* `PatchOwnershipOwnershipID` - Updates ownership fields
* `PatchReviewsReviewID` - Update a review fields
* `PatchUserAccountsUserAccountID` - Updates the user account fields
* `PatchUsersUserID` - Updates user fields
* `PostApps` - Adds a new app for this developer
* `PostAppsAppIDLive` - Change the live app to another, previously approved version
* `PostAppsAppIDPublish` - Publishes the current working version of the app to the marketplace
* `PostAppsAppIDVersionsVersion` - Updates the app or creates a new version
* `PostAppsAppIDVersionsVersionStatus` - Allows a developer or administrator to change the status of apps
* `PostCustomGatewayPaymentOwnershipID` - Adds a payment for an app on behalf of a user
* `PostCustomGatewayRefundOwnershipID` - Fully or partially refund payment for an app on behalf of a user
* `PostDeveloperAccountsDeveloperAccountID` - Updates the developer account or adds the developer account if it doesn't exist
* `PostDevelopersDeveloperID` - Updates the developer record or adds the developer if it doesn't exist
* `PostFiles` - Uploads a file.
* `PostFilesURL` - Uploads a file from a URL
* `PostOwnershipInstall` - Aquires an app license for a user (installs app)
* `PostOwnershipOwnershipID` - Updates an ownership record
* `PostOwnershipUninstallOwnershipID` - Uninstalls a license for a particular user and app (uninstalls app)
* `PostPermissionAppsAppID` - Adds permission to allow the app to access this user's data
* `PostReviews` - Post a review from a User and returns the new post
* `PostReviewsReviewID` - Update a review from a User and returns the new post
* `PostStatsIncrementField` - Increments a statistics field
* `PostStripeGatewayDeveloperDeveloperIDAccounts` - Generate a temporary URL to allow a developer to connect their Stripe account
* `PostStripeGatewayUserUserIDCards` - Adds credit card for this user
* `PostStripeGatewayUserUserIDCardsCardID` - Updates a credit card for this user
* `PostTransactionsTransactionID` - Updates a transaction
* `PostUserAccountsUserAccountID` - Updates the user account or adds the user account if it doesn't exist
* `PostUsersUserID` - Updates a single user or adds the user if they don't exist

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
