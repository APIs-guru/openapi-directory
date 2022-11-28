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
import { PubsubProjectsSubscriptionsAcknowledgeRequest, PubsubProjectsSubscriptionsAcknowledgeResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PubsubProjectsSubscriptionsAcknowledgeRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  pathParams: {
    subscription: "cupiditate",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "repellendus",
    alt: "media",
    callback: "expedita",
    fields: "doloribus",
    key: "qui",
    oauthToken: "ut",
    prettyPrint: false,
    quotaUser: "rerum",
    uploadType: "repellat",
    uploadProtocol: "vero",
  },
  request: {
    ackIds: [
      "consequatur",
      "alias",
      "consequatur",
    ],
  },
};

sdk.projects.pubsubProjectsSubscriptionsAcknowledge(req).then((res: PubsubProjectsSubscriptionsAcknowledgeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `pubsubProjectsSubscriptionsAcknowledge` - Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription. Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.
* `pubsubProjectsSubscriptionsDelete` - Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription, or its topic unless the same topic is specified.
* `pubsubProjectsSubscriptionsGet` - Gets the configuration details of a subscription.
* `pubsubProjectsSubscriptionsList` - Lists matching subscriptions.
* `pubsubProjectsSubscriptionsModifyAckDeadline` - Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted. Note that this does not modify the subscription-level `ackDeadlineSeconds` used for subsequent messages.
* `pubsubProjectsSubscriptionsModifyPushConfig` - Modifies the `PushConfig` for a specified subscription. This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.
* `pubsubProjectsSubscriptionsPull` - Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The server may return `UNAVAILABLE` if there are too many concurrent pull requests pending for the given subscription.
* `pubsubProjectsTopicsCreate` - Creates the given topic with the given name.
* `pubsubProjectsTopicsDelete` - Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.
* `pubsubProjectsTopicsGet` - Gets the configuration of a topic.
* `pubsubProjectsTopicsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `pubsubProjectsTopicsList` - Lists matching topics.
* `pubsubProjectsTopicsPublish` - Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist. The message payload must not be empty; it must contain either a non-empty data field, or at least one attribute.
* `pubsubProjectsTopicsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `pubsubProjectsTopicsSubscriptionsList` - Lists the name of the subscriptions for this topic.
* `pubsubProjectsTopicsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
