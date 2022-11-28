import { SpeakeasyBase } from "../../../internal/utils";
import { BigQueryConfig } from "./bigqueryconfig";
import { DeadLetterPolicy } from "./deadletterpolicy";
import { ExpirationPolicy } from "./expirationpolicy";
import { PushConfig } from "./pushconfig";
import { RetryPolicy } from "./retrypolicy";
export declare enum SubscriptionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    ResourceError = "RESOURCE_ERROR"
}
/**
 * A subscription resource. If none of `push_config` or `bigquery_config` is set, then the subscriber will pull and ack messages using API methods. At most one of these fields may be set.
**/
export declare class Subscription extends SpeakeasyBase {
    ackDeadlineSeconds?: number;
    bigqueryConfig?: BigQueryConfig;
    deadLetterPolicy?: DeadLetterPolicy;
    detached?: boolean;
    enableExactlyOnceDelivery?: boolean;
    enableMessageOrdering?: boolean;
    expirationPolicy?: ExpirationPolicy;
    filter?: string;
    labels?: Map<string, string>;
    messageRetentionDuration?: string;
    name?: string;
    pushConfig?: PushConfig;
    retainAckedMessages?: boolean;
    retryPolicy?: RetryPolicy;
    state?: SubscriptionStateEnum;
    topic?: string;
    topicMessageRetentionDuration?: string;
}
