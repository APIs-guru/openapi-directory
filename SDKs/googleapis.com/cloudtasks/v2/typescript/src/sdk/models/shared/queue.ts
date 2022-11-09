import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppEngineRouting } from "./appenginerouting";
import { RateLimits } from "./ratelimits";
import { RetryConfig } from "./retryconfig";
import { StackdriverLoggingConfig } from "./stackdriverloggingconfig";

export enum QueueStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Running = "RUNNING"
,    Paused = "PAUSED"
,    Disabled = "DISABLED"
}


// Queue
/** 
 * A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, queue types, and others.
**/
export class Queue extends SpeakeasyBase {
  @Metadata({ data: "json, name=appEngineRoutingOverride" })
  appEngineRoutingOverride?: AppEngineRouting;

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
}
