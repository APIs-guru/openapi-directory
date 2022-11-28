import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * pubsubProjectsSchemasCreate - Creates a schema.
    **/
    pubsubProjectsSchemasCreate(req: operations.PubsubProjectsSchemasCreateRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSchemasCreateResponse>;
    /**
     * pubsubProjectsSchemasDelete - Deletes a schema.
    **/
    pubsubProjectsSchemasDelete(req: operations.PubsubProjectsSchemasDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSchemasDeleteResponse>;
    /**
     * pubsubProjectsSchemasGet - Gets a schema.
    **/
    pubsubProjectsSchemasGet(req: operations.PubsubProjectsSchemasGetRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSchemasGetResponse>;
    /**
     * pubsubProjectsSchemasList - Lists schemas in a project.
    **/
    pubsubProjectsSchemasList(req: operations.PubsubProjectsSchemasListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSchemasListResponse>;
    /**
     * pubsubProjectsSchemasValidate - Validates a schema.
    **/
    pubsubProjectsSchemasValidate(req: operations.PubsubProjectsSchemasValidateRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSchemasValidateResponse>;
    /**
     * pubsubProjectsSchemasValidateMessage - Validates a message against a schema.
    **/
    pubsubProjectsSchemasValidateMessage(req: operations.PubsubProjectsSchemasValidateMessageRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSchemasValidateMessageResponse>;
    /**
     * pubsubProjectsSnapshotsDelete - Removes an existing snapshot. Snapshots are used in [Seek] (https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. When the snapshot is deleted, all messages retained in the snapshot are immediately dropped. After a snapshot is deleted, a new one may be created with the same name, but the new one has no association with the old snapshot or its subscription, unless the same subscription is specified.
    **/
    pubsubProjectsSnapshotsDelete(req: operations.PubsubProjectsSnapshotsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSnapshotsDeleteResponse>;
    /**
     * pubsubProjectsSnapshotsGet - Gets the configuration details of a snapshot. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
    **/
    pubsubProjectsSnapshotsGet(req: operations.PubsubProjectsSnapshotsGetRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSnapshotsGetResponse>;
    /**
     * pubsubProjectsSnapshotsList - Lists the existing snapshots. Snapshots are used in [Seek]( https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
    **/
    pubsubProjectsSnapshotsList(req: operations.PubsubProjectsSnapshotsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSnapshotsListResponse>;
    /**
     * pubsubProjectsSubscriptionsAcknowledge - Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription. Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.
    **/
    pubsubProjectsSubscriptionsAcknowledge(req: operations.PubsubProjectsSubscriptionsAcknowledgeRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSubscriptionsAcknowledgeResponse>;
    /**
     * pubsubProjectsSubscriptionsDelete - Deletes an existing subscription. All messages retained in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription or its topic unless the same topic is specified.
    **/
    pubsubProjectsSubscriptionsDelete(req: operations.PubsubProjectsSubscriptionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSubscriptionsDeleteResponse>;
    /**
     * pubsubProjectsSubscriptionsDetach - Detaches a subscription from this topic. All messages retained in the subscription are dropped. Subsequent `Pull` and `StreamingPull` requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will stop.
    **/
    pubsubProjectsSubscriptionsDetach(req: operations.PubsubProjectsSubscriptionsDetachRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSubscriptionsDetachResponse>;
    /**
     * pubsubProjectsSubscriptionsGet - Gets the configuration details of a subscription.
    **/
    pubsubProjectsSubscriptionsGet(req: operations.PubsubProjectsSubscriptionsGetRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSubscriptionsGetResponse>;
    /**
     * pubsubProjectsSubscriptionsList - Lists matching subscriptions.
    **/
    pubsubProjectsSubscriptionsList(req: operations.PubsubProjectsSubscriptionsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSubscriptionsListResponse>;
    /**
     * pubsubProjectsSubscriptionsModifyAckDeadline - Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted. Note that this does not modify the subscription-level `ackDeadlineSeconds` used for subsequent messages.
    **/
    pubsubProjectsSubscriptionsModifyAckDeadline(req: operations.PubsubProjectsSubscriptionsModifyAckDeadlineRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSubscriptionsModifyAckDeadlineResponse>;
    /**
     * pubsubProjectsSubscriptionsModifyPushConfig - Modifies the `PushConfig` for a specified subscription. This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.
    **/
    pubsubProjectsSubscriptionsModifyPushConfig(req: operations.PubsubProjectsSubscriptionsModifyPushConfigRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSubscriptionsModifyPushConfigResponse>;
    /**
     * pubsubProjectsSubscriptionsPull - Pulls messages from the server.
    **/
    pubsubProjectsSubscriptionsPull(req: operations.PubsubProjectsSubscriptionsPullRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSubscriptionsPullResponse>;
    /**
     * pubsubProjectsSubscriptionsSeek - Seeks an existing subscription to a point in time or to a given snapshot, whichever is provided in the request. Snapshots are used in [Seek] (https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. Note that both the subscription and the snapshot must be on the same topic.
    **/
    pubsubProjectsSubscriptionsSeek(req: operations.PubsubProjectsSubscriptionsSeekRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSubscriptionsSeekResponse>;
    /**
     * pubsubProjectsTopicsCreate - Creates the given topic with the given name. See the [resource name rules] (https://cloud.google.com/pubsub/docs/admin#resource_names).
    **/
    pubsubProjectsTopicsCreate(req: operations.PubsubProjectsTopicsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsCreateResponse>;
    /**
     * pubsubProjectsTopicsDelete - Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.
    **/
    pubsubProjectsTopicsDelete(req: operations.PubsubProjectsTopicsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsDeleteResponse>;
    /**
     * pubsubProjectsTopicsGet - Gets the configuration of a topic.
    **/
    pubsubProjectsTopicsGet(req: operations.PubsubProjectsTopicsGetRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsGetResponse>;
    /**
     * pubsubProjectsTopicsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    pubsubProjectsTopicsGetIamPolicy(req: operations.PubsubProjectsTopicsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsGetIamPolicyResponse>;
    /**
     * pubsubProjectsTopicsList - Lists matching topics.
    **/
    pubsubProjectsTopicsList(req: operations.PubsubProjectsTopicsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsListResponse>;
    /**
     * pubsubProjectsTopicsPatch - Updates an existing topic. Note that certain properties of a topic are not modifiable.
    **/
    pubsubProjectsTopicsPatch(req: operations.PubsubProjectsTopicsPatchRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsPatchResponse>;
    /**
     * pubsubProjectsTopicsPublish - Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist.
    **/
    pubsubProjectsTopicsPublish(req: operations.PubsubProjectsTopicsPublishRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsPublishResponse>;
    /**
     * pubsubProjectsTopicsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    pubsubProjectsTopicsSetIamPolicy(req: operations.PubsubProjectsTopicsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsSetIamPolicyResponse>;
    /**
     * pubsubProjectsTopicsSnapshotsList - Lists the names of the snapshots on this topic. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
    **/
    pubsubProjectsTopicsSnapshotsList(req: operations.PubsubProjectsTopicsSnapshotsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsSnapshotsListResponse>;
    /**
     * pubsubProjectsTopicsSubscriptionsList - Lists the names of the attached subscriptions on this topic.
    **/
    pubsubProjectsTopicsSubscriptionsList(req: operations.PubsubProjectsTopicsSubscriptionsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsSubscriptionsListResponse>;
    /**
     * pubsubProjectsTopicsTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    pubsubProjectsTopicsTestIamPermissions(req: operations.PubsubProjectsTopicsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsTestIamPermissionsResponse>;
}
