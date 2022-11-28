import { SpeakeasyBase } from "../../../internal/utils";
import { AppEngineHttpTarget } from "./appenginehttptarget";
import { HttpTarget } from "./httptarget";
import { RateLimits } from "./ratelimits";
import { RetryConfig } from "./retryconfig";
import { QueueStateEnum } from "./queue";
import { QueueStats } from "./queuestats";
/**
 * A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, target types, and others.
**/
export declare class Queue1 extends SpeakeasyBase {
    appEngineHttpTarget?: AppEngineHttpTarget;
    httpTarget?: HttpTarget;
    name?: string;
    pullTarget?: Map<string, any>;
    purgeTime?: string;
    rateLimits?: RateLimits;
    retryConfig?: RetryConfig;
    state?: QueueStateEnum;
    stats?: QueueStats;
    taskTtl?: string;
    tombstoneTtl?: string;
}
