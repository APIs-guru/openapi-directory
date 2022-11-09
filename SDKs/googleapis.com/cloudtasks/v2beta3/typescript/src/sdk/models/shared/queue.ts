import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppEngineHttpQueue } from "./appenginehttpqueue";
import { RateLimits } from "./ratelimits";
import { RetryConfig } from "./retryconfig";
import { StackdriverLoggingConfig } from "./stackdriverloggingconfig";
import { QueueStats } from "./queuestats";

export enum QueueStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Running = "RUNNING"
,    Paused = "PAUSED"
,    Disabled = "DISABLED"
}

export enum QueueTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Pull = "PULL"
,    Push = "PUSH"
}


// Queue
/** 
 * A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, queue types, and others.
**/
export class Queue extends SpeakeasyBase {
  @Metadata({ data: "json, name=appEngineHttpQueue" })
  appEngineHttpQueue?: AppEngineHttpQueue;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=purgeTime" })
  purgeTime?: string;

  @Metadata({ data: "json, name=rateLimits" })
  rateLimits?: RateLimits;

  @Metadata({ data: "json, name=retryConfig" })
  retryConfig?: RetryConfig;

  @Metadata({ data: "json, name=stackdriverLoggingConfig" })
  stackdriverLoggingConfig?: StackdriverLoggingConfig;

  @Metadata({ data: "json, name=state" })
  state?: QueueStateEnum;

  @Metadata({ data: "json, name=stats" })
  stats?: QueueStats;

  @Metadata({ data: "json, name=taskTtl" })
  taskTtl?: string;

  @Metadata({ data: "json, name=tombstoneTtl" })
  tombstoneTtl?: string;

  @Metadata({ data: "json, name=type" })
  type?: QueueTypeEnum;
}
