import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EventFilter } from "./eventfilter";
export declare enum EventTriggerRetryPolicyEnum {
    RetryPolicyUnspecified = "RETRY_POLICY_UNSPECIFIED",
    RetryPolicyDoNotRetry = "RETRY_POLICY_DO_NOT_RETRY",
    RetryPolicyRetry = "RETRY_POLICY_RETRY"
}
/**
 * Describes EventTrigger, used to request events to be sent from another service.
**/
export declare class EventTrigger extends SpeakeasyBase {
    channel?: string;
    eventFilters?: EventFilter[];
    eventType?: string;
    pubsubTopic?: string;
    retryPolicy?: EventTriggerRetryPolicyEnum;
    serviceAccountEmail?: string;
    trigger?: string;
    triggerRegion?: string;
}
