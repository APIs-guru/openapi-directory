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
import { PubsubliteAdminProjectsLocationsOperationsCancelRequest, PubsubliteAdminProjectsLocationsOperationsCancelResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PubsubliteAdminProjectsLocationsOperationsCancelRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    name: "dolorem",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "deleniti",
    alt: "media",
    callback: "voluptatem",
    fields: "pariatur",
    key: "impedit",
    oauthToken: "veritatis",
    prettyPrint: false,
    quotaUser: "aspernatur",
    uploadType: "deleniti",
    uploadProtocol: "consectetur",
  },
  request: {
    "neque": "fuga",
    "ex": "quisquam",
  },
};

sdk.admin.pubsubliteAdminProjectsLocationsOperationsCancel(req).then((res: PubsubliteAdminProjectsLocationsOperationsCancelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### admin

* `pubsubliteAdminProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `pubsubliteAdminProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `pubsubliteAdminProjectsLocationsReservationsCreate` - Creates a new reservation.
* `pubsubliteAdminProjectsLocationsReservationsList` - Returns the list of reservations for the given project.
* `pubsubliteAdminProjectsLocationsReservationsTopicsList` - Lists the topics attached to the specified reservation.
* `pubsubliteAdminProjectsLocationsSubscriptionsCreate` - Creates a new subscription.
* `pubsubliteAdminProjectsLocationsSubscriptionsList` - Returns the list of subscriptions for the given project.
* `pubsubliteAdminProjectsLocationsSubscriptionsSeek` - Performs an out-of-band seek for a subscription to a specified target, which may be timestamps or named positions within the message backlog. Seek translates these targets to cursors for each partition and orchestrates subscribers to start consuming messages from these seek cursors. If an operation is returned, the seek has been registered and subscribers will eventually receive messages from the seek cursors (i.e. eventual consistency), as long as they are using a minimum supported client library version and not a system that tracks cursors independently of Pub/Sub Lite (e.g. Apache Beam, Dataflow, Spark). The seek operation will fail for unsupported clients. If clients would like to know when subscribers react to the seek (or not), they can poll the operation. The seek operation will succeed and complete once subscribers are ready to receive messages from the seek cursors for all partitions of the topic. This means that the seek operation will not complete until all subscribers come online. If the previous seek operation has not yet completed, it will be aborted and the new invocation of seek will supersede it.
* `pubsubliteAdminProjectsLocationsTopicsCreate` - Creates a new topic.
* `pubsubliteAdminProjectsLocationsTopicsDelete` - Deletes the specified topic.
* `pubsubliteAdminProjectsLocationsTopicsGet` - Returns the topic configuration.
* `pubsubliteAdminProjectsLocationsTopicsGetPartitions` - Returns the partition information for the requested topic.
* `pubsubliteAdminProjectsLocationsTopicsList` - Returns the list of topics for the given project.
* `pubsubliteAdminProjectsLocationsTopicsPatch` - Updates properties of the specified topic.
* `pubsubliteAdminProjectsLocationsTopicsSubscriptionsList` - Lists the subscriptions attached to the specified topic.

### cursor

* `pubsubliteCursorProjectsLocationsSubscriptionsCommitCursor` - Updates the committed cursor.
* `pubsubliteCursorProjectsLocationsSubscriptionsCursorsList` - Returns all committed cursor information for a subscription.

### topicStats

* `pubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursor` - Compute the head cursor for the partition. The head cursor's offset is guaranteed to be less than or equal to all messages which have not yet been acknowledged as published, and greater than the offset of any message whose publish has already been acknowledged. It is zero if there have never been messages in the partition.
* `pubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStats` - Compute statistics about a range of messages in a given topic and partition.
* `pubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursor` - Compute the corresponding cursor for a publish or event time in a topic partition.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
