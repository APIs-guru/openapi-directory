import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppEngineHttpTarget } from "./appenginehttptarget";
import { HttpTarget } from "./httptarget";
import { RateLimits } from "./ratelimits";
import { RetryConfig } from "./retryconfig";


export enum QueueStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Paused = "PAUSED",
    Disabled = "DISABLED"
}


// Queue
/** 
 * A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, target types, and others.
**/
export class Queue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appEngineHttpTarget" })
  appEngineHttpTarget?: AppEngineHttpTarget;

  @SpeakeasyMetadata({ data: "json, name=httpTarget" })
  httpTarget?: HttpTarget;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pullTarget" })
  pullTarget?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=purgeTime" })
  purgeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=rateLimits" })
  rateLimits?: RateLimits;

  @SpeakeasyMetadata({ data: "json, name=retryConfig" })
  retryConfig?: RetryConfig;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: QueueStateEnum;

  @SpeakeasyMetadata({ data: "json, name=taskTtl" })
  taskTtl?: string;

  @SpeakeasyMetadata({ data: "json, name=tombstoneTtl" })
  tombstoneTtl?: string;
}
