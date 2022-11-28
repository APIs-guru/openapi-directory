import { SpeakeasyBase } from "../../../internal/utils";
import { AppEngineHttpQueue } from "./appenginehttpqueue";
import { RateLimits } from "./ratelimits";
import { RetryConfig } from "./retryconfig";
import { StackdriverLoggingConfig } from "./stackdriverloggingconfig";
import { QueueStateEnum } from "./queue";
import { QueueStats } from "./queuestats";
import { QueueTypeEnum } from "./queue";
/**
 * A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, queue types, and others.
**/
export declare class Queue1 extends SpeakeasyBase {
    appEngineHttpQueue?: AppEngineHttpQueue;
    name?: string;
    purgeTime?: string;
    rateLimits?: RateLimits;
    retryConfig?: RetryConfig;
    stackdriverLoggingConfig?: StackdriverLoggingConfig;
    state?: QueueStateEnum;
    stats?: QueueStats;
    taskTtl?: string;
    tombstoneTtl?: string;
    type?: QueueTypeEnum;
}
