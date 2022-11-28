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
    
req = operations.PubsubProjectsSchemasCreateRequest(
    security=operations.PubsubProjectsSchemasCreateSecurity(
        option1=operations.PubsubProjectsSchemasCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.PubsubProjectsSchemasCreatePathParams(
        parent="pariatur",
    ),
    query_params=operations.PubsubProjectsSchemasCreateQueryParams(
        dollar_xgafv="2",
        access_token="impedit",
        alt="json",
        callback="molestiae",
        fields="dolore",
        key="dolor",
        oauth_token="libero",
        pretty_print=False,
        quota_user="vel",
        schema_id="nulla",
        upload_type="ut",
        upload_protocol="sit",
    ),
    request=shared.SchemaInput(
        definition="officiis",
        name="ex",
        type="AVRO",
    ),
)
    
res = s.projects.pubsub_projects_schemas_create(req)

if res.schema is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `pubsub_projects_schemas_create` - Creates a schema.
* `pubsub_projects_schemas_delete` - Deletes a schema.
* `pubsub_projects_schemas_get` - Gets a schema.
* `pubsub_projects_schemas_list` - Lists schemas in a project.
* `pubsub_projects_schemas_validate` - Validates a schema.
* `pubsub_projects_schemas_validate_message` - Validates a message against a schema.
* `pubsub_projects_snapshots_delete` - Removes an existing snapshot. Snapshots are used in [Seek] (https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. When the snapshot is deleted, all messages retained in the snapshot are immediately dropped. After a snapshot is deleted, a new one may be created with the same name, but the new one has no association with the old snapshot or its subscription, unless the same subscription is specified.
* `pubsub_projects_snapshots_get` - Gets the configuration details of a snapshot. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
* `pubsub_projects_snapshots_list` - Lists the existing snapshots. Snapshots are used in [Seek]( https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
* `pubsub_projects_subscriptions_acknowledge` - Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription. Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.
* `pubsub_projects_subscriptions_delete` - Deletes an existing subscription. All messages retained in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription or its topic unless the same topic is specified.
* `pubsub_projects_subscriptions_detach` - Detaches a subscription from this topic. All messages retained in the subscription are dropped. Subsequent `Pull` and `StreamingPull` requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will stop.
* `pubsub_projects_subscriptions_get` - Gets the configuration details of a subscription.
* `pubsub_projects_subscriptions_list` - Lists matching subscriptions.
* `pubsub_projects_subscriptions_modify_ack_deadline` - Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted. Note that this does not modify the subscription-level `ackDeadlineSeconds` used for subsequent messages.
* `pubsub_projects_subscriptions_modify_push_config` - Modifies the `PushConfig` for a specified subscription. This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.
* `pubsub_projects_subscriptions_pull` - Pulls messages from the server.
* `pubsub_projects_subscriptions_seek` - Seeks an existing subscription to a point in time or to a given snapshot, whichever is provided in the request. Snapshots are used in [Seek] (https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. Note that both the subscription and the snapshot must be on the same topic.
* `pubsub_projects_topics_create` - Creates the given topic with the given name. See the [resource name rules] (https://cloud.google.com/pubsub/docs/admin#resource_names).
* `pubsub_projects_topics_delete` - Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.
* `pubsub_projects_topics_get` - Gets the configuration of a topic.
* `pubsub_projects_topics_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `pubsub_projects_topics_list` - Lists matching topics.
* `pubsub_projects_topics_patch` - Updates an existing topic. Note that certain properties of a topic are not modifiable.
* `pubsub_projects_topics_publish` - Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist.
* `pubsub_projects_topics_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `pubsub_projects_topics_snapshots_list` - Lists the names of the snapshots on this topic. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
* `pubsub_projects_topics_subscriptions_list` - Lists the names of the attached subscriptions on this topic.
* `pubsub_projects_topics_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
