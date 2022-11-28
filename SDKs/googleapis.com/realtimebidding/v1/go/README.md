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
    
    req := operations.RealtimebiddingBiddersCreativesWatchRequest{
        Security: operations.RealtimebiddingBiddersCreativesWatchSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RealtimebiddingBiddersCreativesWatchPathParams{
            Parent: "veritatis",
        },
        QueryParams: operations.RealtimebiddingBiddersCreativesWatchQueryParams{
            DollarXgafv: "2",
            AccessToken: "non",
            Alt: "proto",
            Callback: "saepe",
            Fields: "necessitatibus",
            Key: "harum",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "voluptate",
            UploadType: "natus",
            UploadProtocol: "cum",
        },
        Request: map[string]interface{}{
            "quae": "iste",
            "reiciendis": "asperiores",
            "esse": "explicabo",
        },
    }
    
    res, err := s.Bidders.RealtimebiddingBiddersCreativesWatch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchCreativesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### bidders

* `RealtimebiddingBiddersCreativesWatch` - Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
* `RealtimebiddingBiddersEndpointsList` - Lists all the bidder's endpoints.
* `RealtimebiddingBiddersList` - Lists all the bidder accounts that belong to the caller.
* `RealtimebiddingBiddersPretargetingConfigsActivate` - Activates a pretargeting configuration.
* `RealtimebiddingBiddersPretargetingConfigsAddTargetedApps` - Adds targeted apps to the pretargeting configuration.
* `RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishers` - Adds targeted publishers to the pretargeting config.
* `RealtimebiddingBiddersPretargetingConfigsAddTargetedSites` - Adds targeted sites to the pretargeting configuration.
* `RealtimebiddingBiddersPretargetingConfigsCreate` - Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.
* `RealtimebiddingBiddersPretargetingConfigsDelete` - Deletes a pretargeting configuration.
* `RealtimebiddingBiddersPretargetingConfigsList` - Lists all pretargeting configurations for a single bidder.
* `RealtimebiddingBiddersPretargetingConfigsRemoveTargetedApps` - Removes targeted apps from the pretargeting configuration.
* `RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers` - Removes targeted publishers from the pretargeting config.
* `RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSites` - Removes targeted sites from the pretargeting configuration.
* `RealtimebiddingBiddersPretargetingConfigsSuspend` - Suspends a pretargeting configuration.
* `RealtimebiddingBiddersPublisherConnectionsBatchApprove` - Batch approves multiple publisher connections.
* `RealtimebiddingBiddersPublisherConnectionsBatchReject` - Batch rejects multiple publisher connections.
* `RealtimebiddingBiddersPublisherConnectionsList` - Lists publisher connections for a given bidder.

### buyers

* `RealtimebiddingBuyersCreativesCreate` - Creates a creative.
* `RealtimebiddingBuyersCreativesList` - Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.
* `RealtimebiddingBuyersCreativesPatch` - Updates a creative.
* `RealtimebiddingBuyersList` - Lists all buyer account information the calling buyer user or service account is permissioned to manage.
* `RealtimebiddingBuyersUserListsClose` - Change the status of a user list to CLOSED. This prevents new users from being added to the user list.
* `RealtimebiddingBuyersUserListsCreate` - Create a new user list.
* `RealtimebiddingBuyersUserListsGet` - Gets a user list by its name.
* `RealtimebiddingBuyersUserListsGetRemarketingTag` - Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
* `RealtimebiddingBuyersUserListsList` - Lists the user lists visible to the current user.
* `RealtimebiddingBuyersUserListsOpen` - Change the status of a user list to OPEN. This allows new users to be added to the user list.
* `RealtimebiddingBuyersUserListsUpdate` - Update the given user list. Only user lists with URLRestrictions can be updated.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
