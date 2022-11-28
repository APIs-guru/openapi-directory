# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MybusinessAccountsCreateRequest(
    query_params=operations.MybusinessAccountsCreateQueryParams(
        dollar_xgafv="2",
        access_token="est",
        alt="media",
        callback="soluta",
        fields="rerum",
        key="perspiciatis",
        oauth_token="amet",
        pretty_print=False,
        primary_owner="suscipit",
        quota_user="in",
        upload_type="voluptas",
        upload_protocol="impedit",
    ),
    request=shared.Account(
        account_name="repellat",
        account_number="nemo",
        name="ut",
        organization_info=shared.OrganizationInfo(
            phone_number="adipisci",
            postal_address=shared.PostalAddress(
                address_lines=[
                    "dolore",
                    "consequuntur",
                ],
                administrative_area="laboriosam",
                language_code="molestias",
                locality="in",
                organization="harum",
                postal_code="cupiditate",
                recipients=[
                    "ea",
                    "aliquid",
                    "rem",
                ],
                region_code="qui",
                revision=44272711320736584,
                sorting_code="voluptatem",
                sublocality="molestiae",
            ),
            registered_domain="quaerat",
        ),
        permission_level="MEMBER_LEVEL",
        role="ACCOUNT_ROLE_UNSPECIFIED",
        state=shared.AccountState(
            status="ACCOUNT_STATUS_UNSPECIFIED",
        ),
        type="LOCATION_GROUP",
    ),
)
    
res = s.accounts.mybusiness_accounts_create(req)

if res.account is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `mybusiness_accounts_create` - Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups. 
* `mybusiness_accounts_generate_account_number` - Generates an account number for this account. The account number is not provisioned when an account is created. Use this request to create an account number when it is required.
* `mybusiness_accounts_invitations_accept` - Accepts the specified invitation.
* `mybusiness_accounts_invitations_decline` - Declines the specified invitation.
* `mybusiness_accounts_invitations_list` - Lists pending invitations for the specified account.
* `mybusiness_accounts_list` - Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.
* `mybusiness_accounts_list_recommend_google_locations` - List all the GoogleLocations that have been recommended to the specified Business Profile account. Recommendations are provided for personal accounts and location groups only, requests for all other account types will result in an error. The recommendations for location groups are based on the locations in that group. The recommendations for personal accounts are based on all of the locations that the user has access to on Business Profile (which includes locations they can access through location groups), and is a superset of all recommendations generated for the user.
* `mybusiness_accounts_locations_admins_create` - Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
* `mybusiness_accounts_locations_admins_list` - Lists all of the admins for the specified location.
* `mybusiness_accounts_locations_associate` - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `FindMatchingLocations`.
* `mybusiness_accounts_locations_batch_get` - Gets all of the specified locations in the given account.
* `mybusiness_accounts_locations_batch_get_reviews` - Returns the paginated list of reviews for all specified locations. This operation is only valid if the specified locations are verified. *Note:* Reviews are limited to a batch size of 200 `location_names` per call.
* `mybusiness_accounts_locations_clear_association` - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* `mybusiness_accounts_locations_create` - Creates a new location owned by the specified account, and returns it.
* `mybusiness_accounts_locations_fetch_verification_options` - Reports all eligible verification options for a location in a specific language.
* `mybusiness_accounts_locations_find_matches` - Finds all of the possible locations that are a match to the specified location. This operation is only valid if the location is unverified.
* `mybusiness_accounts_locations_get_google_updated` - Gets the Google-updated version of the specified location. Returns `NOT_FOUND` if the location does not exist.
* `mybusiness_accounts_locations_insurance_networks_list` - Returns a list of all insurance networks supported by Google.
* `mybusiness_accounts_locations_list` - Lists the locations for the specified account.
* `mybusiness_accounts_locations_local_posts_create` - Creates a new local post associated with the specified location, and returns it.
* `mybusiness_accounts_locations_local_posts_list` - Returns a list of local posts associated with a location.
* `mybusiness_accounts_locations_local_posts_report_insights` - Returns insights for a set of local posts associated with a single listing. Which metrics and how they are reported are options specified in the request proto. *Note:* Insight reports are limited to 100 `local_post_names` per call.
* `mybusiness_accounts_locations_lodging_get_google_updated` - Returns the Google updated Lodging of a specific location.
* `mybusiness_accounts_locations_media_create` - Creates a new media item for the location.
* `mybusiness_accounts_locations_media_customers_list` - Returns a list of media items associated with a location that have been contributed by customers.
* `mybusiness_accounts_locations_media_list` - Returns a list of media items associated with a location.
* `mybusiness_accounts_locations_media_start_upload` - Generates a `MediaItemDataRef` for media item uploading.
* `mybusiness_accounts_locations_questions_answers_delete` - Deletes the answer written by the current user to a question.
* `mybusiness_accounts_locations_questions_answers_list` - Returns the paginated list of answers for a specified question.
* `mybusiness_accounts_locations_questions_answers_upsert` - Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.
* `mybusiness_accounts_locations_questions_create` - Adds a question for the specified location.
* `mybusiness_accounts_locations_questions_delete` - Deletes a specific question written by the current user.
* `mybusiness_accounts_locations_questions_list` - Returns the paginated list of questions and some of its answers for a specified location.
* `mybusiness_accounts_locations_questions_patch` - Updates a specific question written by the current user.
* `mybusiness_accounts_locations_report_insights` - Returns a report containing insights on one or more metrics by location. *Note:* Insight reports are limited to a batch size of 10 `location_names` per call.
* `mybusiness_accounts_locations_reviews_delete_reply` - Deletes the response to the specified review. This operation is only valid if the specified location is verified.
* `mybusiness_accounts_locations_reviews_list` - Returns the paginated list of reviews for the specified location. This operation is only valid if the specified location is verified.
* `mybusiness_accounts_locations_reviews_update_reply` - Updates the reply to the specified review. A reply is created if one does not exist. This operation is only valid if the specified location is verified.
* `mybusiness_accounts_locations_transfer` - Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account. Returns the Location with its new resource name.
* `mybusiness_accounts_locations_verifications_complete` - Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
* `mybusiness_accounts_locations_verifications_list` - List verifications of a location, ordered by create time.
* `mybusiness_accounts_locations_verify` - Starts the verification process for a location.
* `mybusiness_accounts_update_notifications` - Sets the pubsub notification settings for the account informing Business Profile which topic to send pubsub notifications for: - New reviews for locations administered by the account. - Updated reviews for locations administered by the account. - New `GoogleUpdates` for locations administered by the account. An account will only have one notification settings resource, and only one pubsub topic can be set.

### attributes

* `mybusiness_attributes_list` - Returns the list of available attributes that would be available for a location with the given primary category and country.

### categories

* `mybusiness_categories_batch_get` - Returns a list of business categories for the provided language and GConcept ids.
* `mybusiness_categories_list` - Returns a list of business categories. Search will match the category name but not the category ID. *Note:* Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### chains

* `mybusiness_chains_get` - Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.
* `mybusiness_chains_search` - Searches the chain based on chain name.

### googleLocations

* `mybusiness_google_locations_report` - Report a GoogleLocation.
* `mybusiness_google_locations_search` - Search all of the possible locations that are a match to the specified request.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
