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
    
    req := operations.PubsubProjectsSchemasCreateRequest{
        Security: operations.PubsubProjectsSchemasCreateSecurity{
            Option1: &operations.PubsubProjectsSchemasCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.PubsubProjectsSchemasCreatePathParams{
            Parent: "pariatur",
        },
        QueryParams: operations.PubsubProjectsSchemasCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "impedit",
            Alt: "json",
            Callback: "molestiae",
            Fields: "dolore",
            Key: "dolor",
            OauthToken: "libero",
            PrettyPrint: false,
            QuotaUser: "vel",
            SchemaID: "nulla",
            UploadType: "ut",
            UploadProtocol: "sit",
        },
        Request: &shared.SchemaInput{
            Definition: "officiis",
            Name: "ex",
            Type: "AVRO",
        },
    }
    
    res, err := s.Projects.PubsubProjectsSchemasCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Schema != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `PubsubProjectsSchemasCreate` - Creates a schema.
* `PubsubProjectsSchemasDelete` - Deletes a schema.
* `PubsubProjectsSchemasGet` - Gets a schema.
* `PubsubProjectsSchemasList` - Lists schemas in a project.
* `PubsubProjectsSchemasValidate` - Validates a schema.
* `PubsubProjectsSchemasValidateMessage` - Validates a message against a schema.
* `PubsubProjectsSnapshotsDelete` - Removes an existing snapshot. Snapshots are used in [Seek] (https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. When the snapshot is deleted, all messages retained in the snapshot are immediately dropped. After a snapshot is deleted, a new one may be created with the same name, but the new one has no association with the old snapshot or its subscription, unless the same subscription is specified.
* `PubsubProjectsSnapshotsGet` - Gets the configuration details of a snapshot. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
* `PubsubProjectsSnapshotsList` - Lists the existing snapshots. Snapshots are used in [Seek]( https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
* `PubsubProjectsSubscriptionsAcknowledge` - Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription. Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.
* `PubsubProjectsSubscriptionsDelete` - Deletes an existing subscription. All messages retained in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription or its topic unless the same topic is specified.
* `PubsubProjectsSubscriptionsDetach` - Detaches a subscription from this topic. All messages retained in the subscription are dropped. Subsequent `Pull` and `StreamingPull` requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will stop.
* `PubsubProjectsSubscriptionsGet` - Gets the configuration details of a subscription.
* `PubsubProjectsSubscriptionsList` - Lists matching subscriptions.
* `PubsubProjectsSubscriptionsModifyAckDeadline` - Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted. Note that this does not modify the subscription-level `ackDeadlineSeconds` used for subsequent messages.
* `PubsubProjectsSubscriptionsModifyPushConfig` - Modifies the `PushConfig` for a specified subscription. This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.
* `PubsubProjectsSubscriptionsPull` - Pulls messages from the server.
* `PubsubProjectsSubscriptionsSeek` - Seeks an existing subscription to a point in time or to a given snapshot, whichever is provided in the request. Snapshots are used in [Seek] (https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. Note that both the subscription and the snapshot must be on the same topic.
* `PubsubProjectsTopicsCreate` - Creates the given topic with the given name. See the [resource name rules] (https://cloud.google.com/pubsub/docs/admin#resource_names).
* `PubsubProjectsTopicsDelete` - Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.
* `PubsubProjectsTopicsGet` - Gets the configuration of a topic.
* `PubsubProjectsTopicsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `PubsubProjectsTopicsList` - Lists matching topics.
* `PubsubProjectsTopicsPatch` - Updates an existing topic. Note that certain properties of a topic are not modifiable.
* `PubsubProjectsTopicsPublish` - Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist.
* `PubsubProjectsTopicsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `PubsubProjectsTopicsSnapshotsList` - Lists the names of the snapshots on this topic. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
* `PubsubProjectsTopicsSubscriptionsList` - Lists the names of the attached subscriptions on this topic.
* `PubsubProjectsTopicsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
