import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Admin {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * pubsubliteAdminProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    pubsubliteAdminProjectsLocationsOperationsCancel(req: operations.PubsubliteAdminProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteAdminProjectsLocationsOperationsCancelResponse>;
    /**
     * pubsubliteAdminProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    pubsubliteAdminProjectsLocationsOperationsList(req: operations.PubsubliteAdminProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteAdminProjectsLocationsOperationsListResponse>;
    /**
     * pubsubliteAdminProjectsLocationsReservationsCreate - Creates a new reservation.
    **/
    pubsubliteAdminProjectsLocationsReservationsCreate(req: operations.PubsubliteAdminProjectsLocationsReservationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteAdminProjectsLocationsReservationsCreateResponse>;
    /**
     * pubsubliteAdminProjectsLocationsReservationsList - Returns the list of reservations for the given project.
    **/
    pubsubliteAdminProjectsLocationsReservationsList(req: operations.PubsubliteAdminProjectsLocationsReservationsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteAdminProjectsLocationsReservationsListResponse>;
    /**
     * pubsubliteAdminProjectsLocationsReservationsTopicsList - Lists the topics attached to the specified reservation.
    **/
    pubsubliteAdminProjectsLocationsReservationsTopicsList(req: operations.PubsubliteAdminProjectsLocationsReservationsTopicsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteAdminProjectsLocationsReservationsTopicsListResponse>;
    /**
     * pubsubliteAdminProjectsLocationsSubscriptionsCreate - Creates a new subscription.
    **/
    pubsubliteAdminProjectsLocationsSubscriptionsCreate(req: operations.PubsubliteAdminProjectsLocationsSubscriptionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteAdminProjectsLocationsSubscriptionsCreateResponse>;
    /**
     * pubsubliteAdminProjectsLocationsSubscriptionsList - Returns the list of subscriptions for the given project.
    **/
    pubsubliteAdminProjectsLocationsSubscriptionsList(req: operations.PubsubliteAdminProjectsLocationsSubscriptionsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteAdminProjectsLocationsSubscriptionsListResponse>;
    /**
     * pubsubliteAdminProjectsLocationsSubscriptionsSeek - Performs an out-of-band seek for a subscription to a specified target, which may be timestamps or named positions within the message backlog. Seek translates these targets to cursors for each partition and orchestrates subscribers to start consuming messages from these seek cursors. If an operation is returned, the seek has been registered and subscribers will eventually receive messages from the seek cursors (i.e. eventual consistency), as long as they are using a minimum supported client library version and not a system that tracks cursors independently of Pub/Sub Lite (e.g. Apache Beam, Dataflow, Spark). The seek operation will fail for unsupported clients. If clients would like to know when subscribers react to the seek (or not), they can poll the operation. The seek operation will succeed and complete once subscribers are ready to receive messages from the seek cursors for all partitions of the topic. This means that the seek operation will not complete until all subscribers come online. If the previous seek operation has not yet completed, it will be aborted and the new invocation of seek will supersede it.
    **/
    pubsubliteAdminProjectsLocationsSubscriptionsSeek(req: operations.PubsubliteAdminProjectsLocationsSubscriptionsSeekRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteAdminProjectsLocationsSubscriptionsSeekResponse>;
    /**
     * pubsubliteAdminProjectsLocationsTopicsCreate - Creates a new topic.
    **/
    pubsubliteAdminProjectsLocationsTopicsCreate(req: operations.PubsubliteAdminProjectsLocationsTopicsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteAdminProjectsLocationsTopicsCreateResponse>;
    /**
     * pubsubliteAdminProjectsLocationsTopicsDelete - Deletes the specified topic.
    **/
    pubsubliteAdminProjectsLocationsTopicsDelete(req: operations.PubsubliteAdminProjectsLocationsTopicsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteAdminProjectsLocationsTopicsDeleteResponse>;
    /**
     * pubsubliteAdminProjectsLocationsTopicsGet - Returns the topic configuration.
    **/
    pubsubliteAdminProjectsLocationsTopicsGet(req: operations.PubsubliteAdminProjectsLocationsTopicsGetRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteAdminProjectsLocationsTopicsGetResponse>;
    /**
     * pubsubliteAdminProjectsLocationsTopicsGetPartitions - Returns the partition information for the requested topic.
    **/
    pubsubliteAdminProjectsLocationsTopicsGetPartitions(req: operations.PubsubliteAdminProjectsLocationsTopicsGetPartitionsRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteAdminProjectsLocationsTopicsGetPartitionsResponse>;
    /**
     * pubsubliteAdminProjectsLocationsTopicsList - Returns the list of topics for the given project.
    **/
    pubsubliteAdminProjectsLocationsTopicsList(req: operations.PubsubliteAdminProjectsLocationsTopicsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteAdminProjectsLocationsTopicsListResponse>;
    /**
     * pubsubliteAdminProjectsLocationsTopicsPatch - Updates properties of the specified topic.
    **/
    pubsubliteAdminProjectsLocationsTopicsPatch(req: operations.PubsubliteAdminProjectsLocationsTopicsPatchRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteAdminProjectsLocationsTopicsPatchResponse>;
    /**
     * pubsubliteAdminProjectsLocationsTopicsSubscriptionsList - Lists the subscriptions attached to the specified topic.
    **/
    pubsubliteAdminProjectsLocationsTopicsSubscriptionsList(req: operations.PubsubliteAdminProjectsLocationsTopicsSubscriptionsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteAdminProjectsLocationsTopicsSubscriptionsListResponse>;
}
