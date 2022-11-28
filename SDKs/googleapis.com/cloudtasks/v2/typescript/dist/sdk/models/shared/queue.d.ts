import { SpeakeasyBase } from "../../../internal/utils";
import { AppEngineRouting } from "./appenginerouting";
import { RateLimits } from "./ratelimits";
import { RetryConfig } from "./retryconfig";
import { StackdriverLoggingConfig } from "./stackdriverloggingconfig";
export declare enum QueueStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Paused = "PAUSED",
    Disabled = "DISABLED"
}
/**
 * A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, queue types, and others.
**/
export declare class Queue extends SpeakeasyBase {
    appEngineRoutingOverride?: AppEngineRouting;
    name?: string;
    purgeTime?: string;
    rateLimits?: RateLimits;
    retryConfig?: RetryConfig;
    stackdriverLoggingConfig?: StackdriverLoggingConfig;
    state?: QueueStateEnum;
}
