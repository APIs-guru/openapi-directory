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
    s := sdk.New()
    
    req := operations.MybusinessAccountsCreateRequest{
        QueryParams: operations.MybusinessAccountsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "est",
            Alt: "media",
            Callback: "soluta",
            Fields: "rerum",
            Key: "perspiciatis",
            OauthToken: "amet",
            PrettyPrint: false,
            PrimaryOwner: "suscipit",
            QuotaUser: "in",
            UploadType: "voluptas",
            UploadProtocol: "impedit",
        },
        Request: &shared.Account{
            AccountName: "repellat",
            AccountNumber: "nemo",
            Name: "ut",
            OrganizationInfo: &shared.OrganizationInfo{
                PhoneNumber: "adipisci",
                PostalAddress: &shared.PostalAddress{
                    AddressLines: []string{
                        "dolore",
                        "consequuntur",
                    },
                    AdministrativeArea: "laboriosam",
                    LanguageCode: "molestias",
                    Locality: "in",
                    Organization: "harum",
                    PostalCode: "cupiditate",
                    Recipients: []string{
                        "ea",
                        "aliquid",
                        "rem",
                    },
                    RegionCode: "qui",
                    Revision: 44272711320736584,
                    SortingCode: "voluptatem",
                    Sublocality: "molestiae",
                },
                RegisteredDomain: "quaerat",
            },
            PermissionLevel: "MEMBER_LEVEL",
            Role: "ACCOUNT_ROLE_UNSPECIFIED",
            State: &shared.AccountState{
                Status: "ACCOUNT_STATUS_UNSPECIFIED",
            },
            Type: "LOCATION_GROUP",
        },
    }
    
    res, err := s.Accounts.MybusinessAccountsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `MybusinessAccountsCreate` - Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups. 
* `MybusinessAccountsGenerateAccountNumber` - Generates an account number for this account. The account number is not provisioned when an account is created. Use this request to create an account number when it is required.
* `MybusinessAccountsInvitationsAccept` - Accepts the specified invitation.
* `MybusinessAccountsInvitationsDecline` - Declines the specified invitation.
* `MybusinessAccountsInvitationsList` - Lists pending invitations for the specified account.
* `MybusinessAccountsList` - Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.
* `MybusinessAccountsListRecommendGoogleLocations` - List all the GoogleLocations that have been recommended to the specified Business Profile account. Recommendations are provided for personal accounts and location groups only, requests for all other account types will result in an error. The recommendations for location groups are based on the locations in that group. The recommendations for personal accounts are based on all of the locations that the user has access to on Business Profile (which includes locations they can access through location groups), and is a superset of all recommendations generated for the user.
* `MybusinessAccountsLocationsAdminsCreate` - Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
* `MybusinessAccountsLocationsAdminsList` - Lists all of the admins for the specified location.
* `MybusinessAccountsLocationsAssociate` - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `FindMatchingLocations`.
* `MybusinessAccountsLocationsBatchGet` - Gets all of the specified locations in the given account.
* `MybusinessAccountsLocationsBatchGetReviews` - Returns the paginated list of reviews for all specified locations. This operation is only valid if the specified locations are verified. *Note:* Reviews are limited to a batch size of 200 `location_names` per call.
* `MybusinessAccountsLocationsClearAssociation` - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* `MybusinessAccountsLocationsCreate` - Creates a new location owned by the specified account, and returns it.
* `MybusinessAccountsLocationsFetchVerificationOptions` - Reports all eligible verification options for a location in a specific language.
* `MybusinessAccountsLocationsFindMatches` - Finds all of the possible locations that are a match to the specified location. This operation is only valid if the location is unverified.
* `MybusinessAccountsLocationsGetGoogleUpdated` - Gets the Google-updated version of the specified location. Returns `NOT_FOUND` if the location does not exist.
* `MybusinessAccountsLocationsInsuranceNetworksList` - Returns a list of all insurance networks supported by Google.
* `MybusinessAccountsLocationsList` - Lists the locations for the specified account.
* `MybusinessAccountsLocationsLocalPostsCreate` - Creates a new local post associated with the specified location, and returns it.
* `MybusinessAccountsLocationsLocalPostsList` - Returns a list of local posts associated with a location.
* `MybusinessAccountsLocationsLocalPostsReportInsights` - Returns insights for a set of local posts associated with a single listing. Which metrics and how they are reported are options specified in the request proto. *Note:* Insight reports are limited to 100 `local_post_names` per call.
* `MybusinessAccountsLocationsLodgingGetGoogleUpdated` - Returns the Google updated Lodging of a specific location.
* `MybusinessAccountsLocationsMediaCreate` - Creates a new media item for the location.
* `MybusinessAccountsLocationsMediaCustomersList` - Returns a list of media items associated with a location that have been contributed by customers.
* `MybusinessAccountsLocationsMediaList` - Returns a list of media items associated with a location.
* `MybusinessAccountsLocationsMediaStartUpload` - Generates a `MediaItemDataRef` for media item uploading.
* `MybusinessAccountsLocationsQuestionsAnswersDelete` - Deletes the answer written by the current user to a question.
* `MybusinessAccountsLocationsQuestionsAnswersList` - Returns the paginated list of answers for a specified question.
* `MybusinessAccountsLocationsQuestionsAnswersUpsert` - Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.
* `MybusinessAccountsLocationsQuestionsCreate` - Adds a question for the specified location.
* `MybusinessAccountsLocationsQuestionsDelete` - Deletes a specific question written by the current user.
* `MybusinessAccountsLocationsQuestionsList` - Returns the paginated list of questions and some of its answers for a specified location.
* `MybusinessAccountsLocationsQuestionsPatch` - Updates a specific question written by the current user.
* `MybusinessAccountsLocationsReportInsights` - Returns a report containing insights on one or more metrics by location. *Note:* Insight reports are limited to a batch size of 10 `location_names` per call.
* `MybusinessAccountsLocationsReviewsDeleteReply` - Deletes the response to the specified review. This operation is only valid if the specified location is verified.
* `MybusinessAccountsLocationsReviewsList` - Returns the paginated list of reviews for the specified location. This operation is only valid if the specified location is verified.
* `MybusinessAccountsLocationsReviewsUpdateReply` - Updates the reply to the specified review. A reply is created if one does not exist. This operation is only valid if the specified location is verified.
* `MybusinessAccountsLocationsTransfer` - Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account. Returns the Location with its new resource name.
* `MybusinessAccountsLocationsVerificationsComplete` - Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
* `MybusinessAccountsLocationsVerificationsList` - List verifications of a location, ordered by create time.
* `MybusinessAccountsLocationsVerify` - Starts the verification process for a location.
* `MybusinessAccountsUpdateNotifications` - Sets the pubsub notification settings for the account informing Business Profile which topic to send pubsub notifications for: - New reviews for locations administered by the account. - Updated reviews for locations administered by the account. - New `GoogleUpdates` for locations administered by the account. An account will only have one notification settings resource, and only one pubsub topic can be set.

### attributes

* `MybusinessAttributesList` - Returns the list of available attributes that would be available for a location with the given primary category and country.

### categories

* `MybusinessCategoriesBatchGet` - Returns a list of business categories for the provided language and GConcept ids.
* `MybusinessCategoriesList` - Returns a list of business categories. Search will match the category name but not the category ID. *Note:* Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### chains

* `MybusinessChainsGet` - Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.
* `MybusinessChainsSearch` - Searches the chain based on chain name.

### googleLocations

* `MybusinessGoogleLocationsReport` - Report a GoogleLocation.
* `MybusinessGoogleLocationsSearch` - Search all of the possible locations that are a match to the specified request.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
