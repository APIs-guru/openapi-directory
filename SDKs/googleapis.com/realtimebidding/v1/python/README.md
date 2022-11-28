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
    
req = operations.RealtimebiddingBiddersCreativesWatchRequest(
    security=operations.RealtimebiddingBiddersCreativesWatchSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.RealtimebiddingBiddersCreativesWatchPathParams(
        parent="veritatis",
    ),
    query_params=operations.RealtimebiddingBiddersCreativesWatchQueryParams(
        dollar_xgafv="2",
        access_token="non",
        alt="proto",
        callback="saepe",
        fields="necessitatibus",
        key="harum",
        oauth_token="et",
        pretty_print=True,
        quota_user="voluptate",
        upload_type="natus",
        upload_protocol="cum",
    ),
    request={
        "quae": "iste",
        "reiciendis": "asperiores",
        "esse": "explicabo",
    },
)
    
res = s.bidders.realtimebidding_bidders_creatives_watch(req)

if res.watch_creatives_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### bidders

* `realtimebidding_bidders_creatives_watch` - Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
* `realtimebidding_bidders_endpoints_list` - Lists all the bidder's endpoints.
* `realtimebidding_bidders_list` - Lists all the bidder accounts that belong to the caller.
* `realtimebidding_bidders_pretargeting_configs_activate` - Activates a pretargeting configuration.
* `realtimebidding_bidders_pretargeting_configs_add_targeted_apps` - Adds targeted apps to the pretargeting configuration.
* `realtimebidding_bidders_pretargeting_configs_add_targeted_publishers` - Adds targeted publishers to the pretargeting config.
* `realtimebidding_bidders_pretargeting_configs_add_targeted_sites` - Adds targeted sites to the pretargeting configuration.
* `realtimebidding_bidders_pretargeting_configs_create` - Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.
* `realtimebidding_bidders_pretargeting_configs_delete` - Deletes a pretargeting configuration.
* `realtimebidding_bidders_pretargeting_configs_list` - Lists all pretargeting configurations for a single bidder.
* `realtimebidding_bidders_pretargeting_configs_remove_targeted_apps` - Removes targeted apps from the pretargeting configuration.
* `realtimebidding_bidders_pretargeting_configs_remove_targeted_publishers` - Removes targeted publishers from the pretargeting config.
* `realtimebidding_bidders_pretargeting_configs_remove_targeted_sites` - Removes targeted sites from the pretargeting configuration.
* `realtimebidding_bidders_pretargeting_configs_suspend` - Suspends a pretargeting configuration.
* `realtimebidding_bidders_publisher_connections_batch_approve` - Batch approves multiple publisher connections.
* `realtimebidding_bidders_publisher_connections_batch_reject` - Batch rejects multiple publisher connections.
* `realtimebidding_bidders_publisher_connections_list` - Lists publisher connections for a given bidder.

### buyers

* `realtimebidding_buyers_creatives_create` - Creates a creative.
* `realtimebidding_buyers_creatives_list` - Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.
* `realtimebidding_buyers_creatives_patch` - Updates a creative.
* `realtimebidding_buyers_list` - Lists all buyer account information the calling buyer user or service account is permissioned to manage.
* `realtimebidding_buyers_user_lists_close` - Change the status of a user list to CLOSED. This prevents new users from being added to the user list.
* `realtimebidding_buyers_user_lists_create` - Create a new user list.
* `realtimebidding_buyers_user_lists_get` - Gets a user list by its name.
* `realtimebidding_buyers_user_lists_get_remarketing_tag` - Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
* `realtimebidding_buyers_user_lists_list` - Lists the user lists visible to the current user.
* `realtimebidding_buyers_user_lists_open` - Change the status of a user list to OPEN. This allows new users to be added to the user list.
* `realtimebidding_buyers_user_lists_update` - Update the given user list. Only user lists with URLRestrictions can be updated.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
