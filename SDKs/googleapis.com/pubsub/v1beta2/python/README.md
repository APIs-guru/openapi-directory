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
    
req = operations.PubsubProjectsSubscriptionsAcknowledgeRequest(
    security=operations.PubsubProjectsSubscriptionsAcknowledgeSecurity(
        option1=operations.PubsubProjectsSubscriptionsAcknowledgeSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.PubsubProjectsSubscriptionsAcknowledgePathParams(
        subscription="cupiditate",
    ),
    query_params=operations.PubsubProjectsSubscriptionsAcknowledgeQueryParams(
        dollar_xgafv="2",
        access_token="repellendus",
        alt="media",
        callback="expedita",
        fields="doloribus",
        key="qui",
        oauth_token="ut",
        pretty_print=False,
        quota_user="rerum",
        upload_type="repellat",
        upload_protocol="vero",
    ),
    request=shared.AcknowledgeRequest(
        ack_ids=[
            "consequatur",
            "alias",
            "consequatur",
        ],
    ),
)
    
res = s.projects.pubsub_projects_subscriptions_acknowledge(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `pubsub_projects_subscriptions_acknowledge` - Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription. Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.
* `pubsub_projects_subscriptions_delete` - Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription, or its topic unless the same topic is specified.
* `pubsub_projects_subscriptions_get` - Gets the configuration details of a subscription.
* `pubsub_projects_subscriptions_list` - Lists matching subscriptions.
* `pubsub_projects_subscriptions_modify_ack_deadline` - Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted. Note that this does not modify the subscription-level `ackDeadlineSeconds` used for subsequent messages.
* `pubsub_projects_subscriptions_modify_push_config` - Modifies the `PushConfig` for a specified subscription. This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.
* `pubsub_projects_subscriptions_pull` - Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The server may return `UNAVAILABLE` if there are too many concurrent pull requests pending for the given subscription.
* `pubsub_projects_topics_create` - Creates the given topic with the given name.
* `pubsub_projects_topics_delete` - Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.
* `pubsub_projects_topics_get` - Gets the configuration of a topic.
* `pubsub_projects_topics_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `pubsub_projects_topics_list` - Lists matching topics.
* `pubsub_projects_topics_publish` - Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist. The message payload must not be empty; it must contain either a non-empty data field, or at least one attribute.
* `pubsub_projects_topics_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `pubsub_projects_topics_subscriptions_list` - Lists the name of the subscriptions for this topic.
* `pubsub_projects_topics_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
