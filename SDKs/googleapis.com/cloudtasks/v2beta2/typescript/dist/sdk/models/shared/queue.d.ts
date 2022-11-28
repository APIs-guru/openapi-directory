import { SpeakeasyBase } from "../../../internal/utils";
import { AppEngineHttpTarget } from "./appenginehttptarget";
import { HttpTarget } from "./httptarget";
import { RateLimits } from "./ratelimits";
import { RetryConfig } from "./retryconfig";
export declare enum QueueStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Paused = "PAUSED",
    Disabled = "DISABLED"
}
/**
 * A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, target types, and others.
**/
export declare class Queue extends SpeakeasyBase {
    appEngineHttpTarget?: AppEngineHttpTarget;
    httpTarget?: HttpTarget;
    name?: string;
    pullTarget?: Map<string, any>;
    purgeTime?: string;
    rateLimits?: RateLimits;
    retryConfig?: RetryConfig;
    state?: QueueStateEnum;
    taskTtl?: string;
    tombstoneTtl?: string;
}
