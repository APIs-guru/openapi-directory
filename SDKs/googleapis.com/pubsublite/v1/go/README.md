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
    
    req := operations.PubsubliteAdminProjectsLocationsOperationsCancelRequest{
        Security: operations.PubsubliteAdminProjectsLocationsOperationsCancelSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.PubsubliteAdminProjectsLocationsOperationsCancelPathParams{
            Name: "dolorem",
        },
        QueryParams: operations.PubsubliteAdminProjectsLocationsOperationsCancelQueryParams{
            DollarXgafv: "2",
            AccessToken: "deleniti",
            Alt: "media",
            Callback: "voluptatem",
            Fields: "pariatur",
            Key: "impedit",
            OauthToken: "veritatis",
            PrettyPrint: false,
            QuotaUser: "aspernatur",
            UploadType: "deleniti",
            UploadProtocol: "consectetur",
        },
        Request: map[string]interface{}{
            "neque": "fuga",
            "ex": "quisquam",
        },
    }
    
    res, err := s.Admin.PubsubliteAdminProjectsLocationsOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### admin

* `PubsubliteAdminProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `PubsubliteAdminProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `PubsubliteAdminProjectsLocationsReservationsCreate` - Creates a new reservation.
* `PubsubliteAdminProjectsLocationsReservationsList` - Returns the list of reservations for the given project.
* `PubsubliteAdminProjectsLocationsReservationsTopicsList` - Lists the topics attached to the specified reservation.
* `PubsubliteAdminProjectsLocationsSubscriptionsCreate` - Creates a new subscription.
* `PubsubliteAdminProjectsLocationsSubscriptionsList` - Returns the list of subscriptions for the given project.
* `PubsubliteAdminProjectsLocationsSubscriptionsSeek` - Performs an out-of-band seek for a subscription to a specified target, which may be timestamps or named positions within the message backlog. Seek translates these targets to cursors for each partition and orchestrates subscribers to start consuming messages from these seek cursors. If an operation is returned, the seek has been registered and subscribers will eventually receive messages from the seek cursors (i.e. eventual consistency), as long as they are using a minimum supported client library version and not a system that tracks cursors independently of Pub/Sub Lite (e.g. Apache Beam, Dataflow, Spark). The seek operation will fail for unsupported clients. If clients would like to know when subscribers react to the seek (or not), they can poll the operation. The seek operation will succeed and complete once subscribers are ready to receive messages from the seek cursors for all partitions of the topic. This means that the seek operation will not complete until all subscribers come online. If the previous seek operation has not yet completed, it will be aborted and the new invocation of seek will supersede it.
* `PubsubliteAdminProjectsLocationsTopicsCreate` - Creates a new topic.
* `PubsubliteAdminProjectsLocationsTopicsDelete` - Deletes the specified topic.
* `PubsubliteAdminProjectsLocationsTopicsGet` - Returns the topic configuration.
* `PubsubliteAdminProjectsLocationsTopicsGetPartitions` - Returns the partition information for the requested topic.
* `PubsubliteAdminProjectsLocationsTopicsList` - Returns the list of topics for the given project.
* `PubsubliteAdminProjectsLocationsTopicsPatch` - Updates properties of the specified topic.
* `PubsubliteAdminProjectsLocationsTopicsSubscriptionsList` - Lists the subscriptions attached to the specified topic.

### cursor

* `PubsubliteCursorProjectsLocationsSubscriptionsCommitCursor` - Updates the committed cursor.
* `PubsubliteCursorProjectsLocationsSubscriptionsCursorsList` - Returns all committed cursor information for a subscription.

### topicStats

* `PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursor` - Compute the head cursor for the partition. The head cursor's offset is guaranteed to be less than or equal to all messages which have not yet been acknowledged as published, and greater than the offset of any message whose publish has already been acknowledged. It is zero if there have never been messages in the partition.
* `PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStats` - Compute statistics about a range of messages in a given topic and partition.
* `PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursor` - Compute the corresponding cursor for a publish or event time in a topic partition.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
