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
import { RealtimebiddingBiddersCreativesWatchRequest, RealtimebiddingBiddersCreativesWatchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: RealtimebiddingBiddersCreativesWatchRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "veritatis",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "non",
    alt: "proto",
    callback: "saepe",
    fields: "necessitatibus",
    key: "harum",
    oauthToken: "et",
    prettyPrint: true,
    quotaUser: "voluptate",
    uploadType: "natus",
    uploadProtocol: "cum",
  },
  request: {
    "quae": "iste",
    "reiciendis": "asperiores",
    "esse": "explicabo",
  },
};

sdk.bidders.realtimebiddingBiddersCreativesWatch(req).then((res: RealtimebiddingBiddersCreativesWatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### bidders

* `realtimebiddingBiddersCreativesWatch` - Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
* `realtimebiddingBiddersEndpointsList` - Lists all the bidder's endpoints.
* `realtimebiddingBiddersList` - Lists all the bidder accounts that belong to the caller.
* `realtimebiddingBiddersPretargetingConfigsActivate` - Activates a pretargeting configuration.
* `realtimebiddingBiddersPretargetingConfigsAddTargetedApps` - Adds targeted apps to the pretargeting configuration.
* `realtimebiddingBiddersPretargetingConfigsAddTargetedPublishers` - Adds targeted publishers to the pretargeting config.
* `realtimebiddingBiddersPretargetingConfigsAddTargetedSites` - Adds targeted sites to the pretargeting configuration.
* `realtimebiddingBiddersPretargetingConfigsCreate` - Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.
* `realtimebiddingBiddersPretargetingConfigsDelete` - Deletes a pretargeting configuration.
* `realtimebiddingBiddersPretargetingConfigsList` - Lists all pretargeting configurations for a single bidder.
* `realtimebiddingBiddersPretargetingConfigsRemoveTargetedApps` - Removes targeted apps from the pretargeting configuration.
* `realtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers` - Removes targeted publishers from the pretargeting config.
* `realtimebiddingBiddersPretargetingConfigsRemoveTargetedSites` - Removes targeted sites from the pretargeting configuration.
* `realtimebiddingBiddersPretargetingConfigsSuspend` - Suspends a pretargeting configuration.
* `realtimebiddingBiddersPublisherConnectionsBatchApprove` - Batch approves multiple publisher connections.
* `realtimebiddingBiddersPublisherConnectionsBatchReject` - Batch rejects multiple publisher connections.
* `realtimebiddingBiddersPublisherConnectionsList` - Lists publisher connections for a given bidder.

### buyers

* `realtimebiddingBuyersCreativesCreate` - Creates a creative.
* `realtimebiddingBuyersCreativesList` - Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.
* `realtimebiddingBuyersCreativesPatch` - Updates a creative.
* `realtimebiddingBuyersList` - Lists all buyer account information the calling buyer user or service account is permissioned to manage.
* `realtimebiddingBuyersUserListsClose` - Change the status of a user list to CLOSED. This prevents new users from being added to the user list.
* `realtimebiddingBuyersUserListsCreate` - Create a new user list.
* `realtimebiddingBuyersUserListsGet` - Gets a user list by its name.
* `realtimebiddingBuyersUserListsGetRemarketingTag` - Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
* `realtimebiddingBuyersUserListsList` - Lists the user lists visible to the current user.
* `realtimebiddingBuyersUserListsOpen` - Change the status of a user list to OPEN. This allows new users to be added to the user list.
* `realtimebiddingBuyersUserListsUpdate` - Update the given user list. Only user lists with URLRestrictions can be updated.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
