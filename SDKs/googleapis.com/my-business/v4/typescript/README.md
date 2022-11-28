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
import { MybusinessAccountsCreateRequest, MybusinessAccountsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: MybusinessAccountsCreateRequest = {
  queryParams: {
    dollarXgafv: "2",
    accessToken: "est",
    alt: "media",
    callback: "soluta",
    fields: "rerum",
    key: "perspiciatis",
    oauthToken: "amet",
    prettyPrint: false,
    primaryOwner: "suscipit",
    quotaUser: "in",
    uploadType: "voluptas",
    uploadProtocol: "impedit",
  },
  request: {
    accountName: "repellat",
    accountNumber: "nemo",
    name: "ut",
    organizationInfo: {
      phoneNumber: "adipisci",
      postalAddress: {
        addressLines: [
          "dolore",
          "consequuntur",
        ],
        administrativeArea: "laboriosam",
        languageCode: "molestias",
        locality: "in",
        organization: "harum",
        postalCode: "cupiditate",
        recipients: [
          "ea",
          "aliquid",
          "rem",
        ],
        regionCode: "qui",
        revision: 44272711320736584,
        sortingCode: "voluptatem",
        sublocality: "molestiae",
      },
      registeredDomain: "quaerat",
    },
    permissionLevel: "MEMBER_LEVEL",
    role: "ACCOUNT_ROLE_UNSPECIFIED",
    state: {
      status: "ACCOUNT_STATUS_UNSPECIFIED",
    },
    type: "LOCATION_GROUP",
  },
};

sdk.accounts.mybusinessAccountsCreate(req).then((res: MybusinessAccountsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `mybusinessAccountsCreate` - Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups. 
* `mybusinessAccountsGenerateAccountNumber` - Generates an account number for this account. The account number is not provisioned when an account is created. Use this request to create an account number when it is required.
* `mybusinessAccountsInvitationsAccept` - Accepts the specified invitation.
* `mybusinessAccountsInvitationsDecline` - Declines the specified invitation.
* `mybusinessAccountsInvitationsList` - Lists pending invitations for the specified account.
* `mybusinessAccountsList` - Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.
* `mybusinessAccountsListRecommendGoogleLocations` - List all the GoogleLocations that have been recommended to the specified Business Profile account. Recommendations are provided for personal accounts and location groups only, requests for all other account types will result in an error. The recommendations for location groups are based on the locations in that group. The recommendations for personal accounts are based on all of the locations that the user has access to on Business Profile (which includes locations they can access through location groups), and is a superset of all recommendations generated for the user.
* `mybusinessAccountsLocationsAdminsCreate` - Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
* `mybusinessAccountsLocationsAdminsList` - Lists all of the admins for the specified location.
* `mybusinessAccountsLocationsAssociate` - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `FindMatchingLocations`.
* `mybusinessAccountsLocationsBatchGet` - Gets all of the specified locations in the given account.
* `mybusinessAccountsLocationsBatchGetReviews` - Returns the paginated list of reviews for all specified locations. This operation is only valid if the specified locations are verified. *Note:* Reviews are limited to a batch size of 200 `location_names` per call.
* `mybusinessAccountsLocationsClearAssociation` - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* `mybusinessAccountsLocationsCreate` - Creates a new location owned by the specified account, and returns it.
* `mybusinessAccountsLocationsFetchVerificationOptions` - Reports all eligible verification options for a location in a specific language.
* `mybusinessAccountsLocationsFindMatches` - Finds all of the possible locations that are a match to the specified location. This operation is only valid if the location is unverified.
* `mybusinessAccountsLocationsGetGoogleUpdated` - Gets the Google-updated version of the specified location. Returns `NOT_FOUND` if the location does not exist.
* `mybusinessAccountsLocationsInsuranceNetworksList` - Returns a list of all insurance networks supported by Google.
* `mybusinessAccountsLocationsList` - Lists the locations for the specified account.
* `mybusinessAccountsLocationsLocalPostsCreate` - Creates a new local post associated with the specified location, and returns it.
* `mybusinessAccountsLocationsLocalPostsList` - Returns a list of local posts associated with a location.
* `mybusinessAccountsLocationsLocalPostsReportInsights` - Returns insights for a set of local posts associated with a single listing. Which metrics and how they are reported are options specified in the request proto. *Note:* Insight reports are limited to 100 `local_post_names` per call.
* `mybusinessAccountsLocationsLodgingGetGoogleUpdated` - Returns the Google updated Lodging of a specific location.
* `mybusinessAccountsLocationsMediaCreate` - Creates a new media item for the location.
* `mybusinessAccountsLocationsMediaCustomersList` - Returns a list of media items associated with a location that have been contributed by customers.
* `mybusinessAccountsLocationsMediaList` - Returns a list of media items associated with a location.
* `mybusinessAccountsLocationsMediaStartUpload` - Generates a `MediaItemDataRef` for media item uploading.
* `mybusinessAccountsLocationsQuestionsAnswersDelete` - Deletes the answer written by the current user to a question.
* `mybusinessAccountsLocationsQuestionsAnswersList` - Returns the paginated list of answers for a specified question.
* `mybusinessAccountsLocationsQuestionsAnswersUpsert` - Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.
* `mybusinessAccountsLocationsQuestionsCreate` - Adds a question for the specified location.
* `mybusinessAccountsLocationsQuestionsDelete` - Deletes a specific question written by the current user.
* `mybusinessAccountsLocationsQuestionsList` - Returns the paginated list of questions and some of its answers for a specified location.
* `mybusinessAccountsLocationsQuestionsPatch` - Updates a specific question written by the current user.
* `mybusinessAccountsLocationsReportInsights` - Returns a report containing insights on one or more metrics by location. *Note:* Insight reports are limited to a batch size of 10 `location_names` per call.
* `mybusinessAccountsLocationsReviewsDeleteReply` - Deletes the response to the specified review. This operation is only valid if the specified location is verified.
* `mybusinessAccountsLocationsReviewsList` - Returns the paginated list of reviews for the specified location. This operation is only valid if the specified location is verified.
* `mybusinessAccountsLocationsReviewsUpdateReply` - Updates the reply to the specified review. A reply is created if one does not exist. This operation is only valid if the specified location is verified.
* `mybusinessAccountsLocationsTransfer` - Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account. Returns the Location with its new resource name.
* `mybusinessAccountsLocationsVerificationsComplete` - Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
* `mybusinessAccountsLocationsVerificationsList` - List verifications of a location, ordered by create time.
* `mybusinessAccountsLocationsVerify` - Starts the verification process for a location.
* `mybusinessAccountsUpdateNotifications` - Sets the pubsub notification settings for the account informing Business Profile which topic to send pubsub notifications for: - New reviews for locations administered by the account. - Updated reviews for locations administered by the account. - New `GoogleUpdates` for locations administered by the account. An account will only have one notification settings resource, and only one pubsub topic can be set.

### attributes

* `mybusinessAttributesList` - Returns the list of available attributes that would be available for a location with the given primary category and country.

### categories

* `mybusinessCategoriesBatchGet` - Returns a list of business categories for the provided language and GConcept ids.
* `mybusinessCategoriesList` - Returns a list of business categories. Search will match the category name but not the category ID. *Note:* Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### chains

* `mybusinessChainsGet` - Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.
* `mybusinessChainsSearch` - Searches the chain based on chain name.

### googleLocations

* `mybusinessGoogleLocationsReport` - Report a GoogleLocation.
* `mybusinessGoogleLocationsSearch` - Search all of the possible locations that are a match to the specified request.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
