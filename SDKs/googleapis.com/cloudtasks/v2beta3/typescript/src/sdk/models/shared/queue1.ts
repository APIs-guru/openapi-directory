import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppEngineHttpQueue } from "./appenginehttpqueue";
import { RateLimits } from "./ratelimits";
import { RetryConfig } from "./retryconfig";
import { StackdriverLoggingConfig } from "./stackdriverloggingconfig";
import { QueueStateEnum } from "./queue";
import { QueueStats } from "./queuestats";
import { QueueTypeEnum } from "./queue";



// Queue1
/** 
 * A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, queue types, and others.
**/
export class Queue1 extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: QueueStats;

  @SpeakeasyMetadata({ data: "json, name=taskTtl" })
  taskTtl?: string;

  @SpeakeasyMetadata({ data: "json, name=tombstoneTtl" })
  tombstoneTtl?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: QueueTypeEnum;
}
