# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { DeleteAppsAppIdRequest, DeleteAppsAppIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  }
));
    
const req: DeleteAppsAppIdRequest = {
  pathParams: {
    appId: "at",
  },
  queryParams: {
    developerId: "qui",
  },
};

sdk.sdk.deleteAppsAppId(req).then((res: DeleteAppsAppIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteAppsAppId` - Removes app and all versions
* `deleteAppsAppIdVersionsVersion` - Removes AppVersion
* `deleteDeveloperAccountsDeveloperAccountId` - Removes the developer account
* `deleteDevelopersDeveloperId` - Removes a single developer
* `deletePermissionAppsAppId` - Removes permission that allows the app to access this user's data
* `deleteReviewsReviewId` - Remove a review
* `deleteStripeGatewayDeveloperDeveloperIdAccountsStripeId` - Disconnects a developer's Stripe account
* `deleteStripeGatewayUserUserIdCardsCardId` - Removes a credit card for a user
* `deleteTransactionsTransactionId` - Deleted a transaction
* `deleteUserAccountsUserAccountId` - Removes the user account
* `deleteUsersUserId` - Removes a single user
* `getApps` - Returns a paginated list of APPROVED or SUSPENDED apps
* `getAppsAppId` - Returns a single APPROVED or SUSPENDED app
* `getAppsAppIdVersionsVersion` - Returns a single AppVersion
* `getAppsBySafeNameSafeName` - Returns a single APPROVED or SUSPENDED app
* `getAppsTextSearch` - Searches through the text of fields to find APPROVED or SUSPENDED apps
* `getAppsVersions` - Returns a paginated list of AppVersions
* `getDeveloperAccounts` - Returns a paginated list of developerAccounts
* `getDeveloperAccountsDeveloperAccountId` - Returns a single developer account
* `getDevelopers` - Returns a paginated list of developers
* `getDevelopersDeveloperId` - Returns a single developer
* `getEventsEventId` - Returns an event
* `getFiles` - Returns a paginated list of files
* `getFilesByIdOrUrl` - Get the details for a file.
* `getFilesDownload` - A signed URL for downloading a private file can be returned by providing the fileId.
* `getMarketsThis` - Returns the current marketplace
* `getOwnership` - Returns a paginated list of app licenses
* `getOwnershipOwnershipId` - Returns an ownership record
* `getPermissionAppsAppId` - Returns permission that allows the app to access this user's data
* `getReviews` - Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set
* `getReviewsReviewId` - Find a Review within a particular App and marketplace
* `getStatsSeriesPeriodFields` - Return a timeseries for a particular field
* `getStatsTotal` - Returns the total number of events for a particular field.
* `getStripeGatewayDeveloperDeveloperIdAccounts` - Returns a developers connected Stripe accounts
* `getStripeGatewayUserUserIdCards` - Returns credit cards for this user
* `getTransactions` - Returns a paginated list of transactions
* `getTransactionsTransactionId` - Returns a transaction
* `getUserAccounts` - Returns a paginated list of userAccounts
* `getUserAccountsUserAccountId` - Returns a single user account
* `getUsers` - Returns a paginated list of users
* `getUsersUserId` - Return a single user
* `patchAppsAppIdVersionsVersion` - Updates the app fields or creates a new version
* `patchDeveloperAccountsDeveloperAccountId` - Updates the developer account fields
* `patchDevelopersDeveloperId` - Updates the developer fields
* `patchOwnershipOwnershipId` - Updates ownership fields
* `patchReviewsReviewId` - Update a review fields
* `patchUserAccountsUserAccountId` - Updates the user account fields
* `patchUsersUserId` - Updates user fields
* `postApps` - Adds a new app for this developer
* `postAppsAppIdLive` - Change the live app to another, previously approved version
* `postAppsAppIdPublish` - Publishes the current working version of the app to the marketplace
* `postAppsAppIdVersionsVersion` - Updates the app or creates a new version
* `postAppsAppIdVersionsVersionStatus` - Allows a developer or administrator to change the status of apps
* `postCustomGatewayPaymentOwnershipId` - Adds a payment for an app on behalf of a user
* `postCustomGatewayRefundOwnershipId` - Fully or partially refund payment for an app on behalf of a user
* `postDeveloperAccountsDeveloperAccountId` - Updates the developer account or adds the developer account if it doesn't exist
* `postDevelopersDeveloperId` - Updates the developer record or adds the developer if it doesn't exist
* `postFiles` - Uploads a file.
* `postFilesUrl` - Uploads a file from a URL
* `postOwnershipInstall` - Aquires an app license for a user (installs app)
* `postOwnershipOwnershipId` - Updates an ownership record
* `postOwnershipUninstallOwnershipId` - Uninstalls a license for a particular user and app (uninstalls app)
* `postPermissionAppsAppId` - Adds permission to allow the app to access this user's data
* `postReviews` - Post a review from a User and returns the new post
* `postReviewsReviewId` - Update a review from a User and returns the new post
* `postStatsIncrementField` - Increments a statistics field
* `postStripeGatewayDeveloperDeveloperIdAccounts` - Generate a temporary URL to allow a developer to connect their Stripe account
* `postStripeGatewayUserUserIdCards` - Adds credit card for this user
* `postStripeGatewayUserUserIdCardsCardId` - Updates a credit card for this user
* `postTransactionsTransactionId` - Updates a transaction
* `postUserAccountsUserAccountId` - Updates the user account or adds the user account if it doesn't exist
* `postUsersUserId` - Updates a single user or adds the user if they don't exist

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
