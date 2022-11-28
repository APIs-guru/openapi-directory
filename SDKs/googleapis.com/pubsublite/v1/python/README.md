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
    
req = operations.PubsubliteAdminProjectsLocationsOperationsCancelRequest(
    security=operations.PubsubliteAdminProjectsLocationsOperationsCancelSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.PubsubliteAdminProjectsLocationsOperationsCancelPathParams(
        name="dolorem",
    ),
    query_params=operations.PubsubliteAdminProjectsLocationsOperationsCancelQueryParams(
        dollar_xgafv="2",
        access_token="deleniti",
        alt="media",
        callback="voluptatem",
        fields="pariatur",
        key="impedit",
        oauth_token="veritatis",
        pretty_print=False,
        quota_user="aspernatur",
        upload_type="deleniti",
        upload_protocol="consectetur",
    ),
    request={
        "neque": "fuga",
        "ex": "quisquam",
    },
)
    
res = s.admin.pubsublite_admin_projects_locations_operations_cancel(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### admin

* `pubsublite_admin_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `pubsublite_admin_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `pubsublite_admin_projects_locations_reservations_create` - Creates a new reservation.
* `pubsublite_admin_projects_locations_reservations_list` - Returns the list of reservations for the given project.
* `pubsublite_admin_projects_locations_reservations_topics_list` - Lists the topics attached to the specified reservation.
* `pubsublite_admin_projects_locations_subscriptions_create` - Creates a new subscription.
* `pubsublite_admin_projects_locations_subscriptions_list` - Returns the list of subscriptions for the given project.
* `pubsublite_admin_projects_locations_subscriptions_seek` - Performs an out-of-band seek for a subscription to a specified target, which may be timestamps or named positions within the message backlog. Seek translates these targets to cursors for each partition and orchestrates subscribers to start consuming messages from these seek cursors. If an operation is returned, the seek has been registered and subscribers will eventually receive messages from the seek cursors (i.e. eventual consistency), as long as they are using a minimum supported client library version and not a system that tracks cursors independently of Pub/Sub Lite (e.g. Apache Beam, Dataflow, Spark). The seek operation will fail for unsupported clients. If clients would like to know when subscribers react to the seek (or not), they can poll the operation. The seek operation will succeed and complete once subscribers are ready to receive messages from the seek cursors for all partitions of the topic. This means that the seek operation will not complete until all subscribers come online. If the previous seek operation has not yet completed, it will be aborted and the new invocation of seek will supersede it.
* `pubsublite_admin_projects_locations_topics_create` - Creates a new topic.
* `pubsublite_admin_projects_locations_topics_delete` - Deletes the specified topic.
* `pubsublite_admin_projects_locations_topics_get` - Returns the topic configuration.
* `pubsublite_admin_projects_locations_topics_get_partitions` - Returns the partition information for the requested topic.
* `pubsublite_admin_projects_locations_topics_list` - Returns the list of topics for the given project.
* `pubsublite_admin_projects_locations_topics_patch` - Updates properties of the specified topic.
* `pubsublite_admin_projects_locations_topics_subscriptions_list` - Lists the subscriptions attached to the specified topic.

### cursor

* `pubsublite_cursor_projects_locations_subscriptions_commit_cursor` - Updates the committed cursor.
* `pubsublite_cursor_projects_locations_subscriptions_cursors_list` - Returns all committed cursor information for a subscription.

### topicStats

* `pubsublite_topic_stats_projects_locations_topics_compute_head_cursor` - Compute the head cursor for the partition. The head cursor's offset is guaranteed to be less than or equal to all messages which have not yet been acknowledged as published, and greater than the offset of any message whose publish has already been acknowledged. It is zero if there have never been messages in the partition.
* `pubsublite_topic_stats_projects_locations_topics_compute_message_stats` - Compute statistics about a range of messages in a given topic and partition.
* `pubsublite_topic_stats_projects_locations_topics_compute_time_cursor` - Compute the corresponding cursor for a publish or event time in a topic partition.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
