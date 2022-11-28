import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppEngineHttpQueue } from "./appenginehttpqueue";
import { RateLimits } from "./ratelimits";
import { RetryConfig } from "./retryconfig";
import { StackdriverLoggingConfig } from "./stackdriverloggingconfig";


export enum QueueStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Paused = "PAUSED",
    Disabled = "DISABLED"
}

export enum QueueTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Pull = "PULL",
    Push = "PUSH"
}


// Queue
/** 
 * A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, queue types, and others.
**/
export class Queue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appEngineHttpQueue" })
  appEngineHttpQueue?: AppEngineHttpQueue;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=purgeTime" })
  purgeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=rateLimits" })
  rateLimits?: RateLimits;

  @SpeakeasyMetadata({ data: "json, name=retryConfig" })
  retryConfig?: RetryConfig;

  @SpeakeasyMetadata({ data: "json, name=stackdriverLoggingConfig" })
  stackdriverLoggingConfig?: StackdriverLoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: QueueStateEnum;

  @SpeakeasyMetadata({ data: "json, name=taskTtl" })
  taskTtl?: string;

  @SpeakeasyMetadata({ data: "json, name=tombstoneTtl" })
  tombstoneTtl?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: QueueTypeEnum;
}
