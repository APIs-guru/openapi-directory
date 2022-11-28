import { SpeakeasyBase } from "../../../internal/utils";
import { AppEngineHttpQueue } from "./appenginehttpqueue";
import { RateLimits } from "./ratelimits";
import { RetryConfig } from "./retryconfig";
import { StackdriverLoggingConfig } from "./stackdriverloggingconfig";
export declare enum QueueStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Paused = "PAUSED",
    Disabled = "DISABLED"
}
export declare enum QueueTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Pull = "PULL",
    Push = "PUSH"
}
/**
 * A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, queue types, and others.
**/
export declare class Queue extends SpeakeasyBase {
    appEngineHttpQueue?: AppEngineHttpQueue;
    name?: string;
    purgeTime?: string;
    rateLimits?: RateLimits;
    retryConfig?: RetryConfig;
    stackdriverLoggingConfig?: StackdriverLoggingConfig;
    state?: QueueStateEnum;
    taskTtl?: string;
    tombstoneTtl?: string;
    type?: QueueTypeEnum;
}
