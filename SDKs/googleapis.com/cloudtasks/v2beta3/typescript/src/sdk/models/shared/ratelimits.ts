import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RateLimits
/** 
 * Rate limits. This message determines the maximum rate that tasks can be dispatched by a queue, regardless of whether the dispatch is a first task attempt or a retry. Note: The debugging command, RunTask, will run a task even if the queue has reached its RateLimits.
**/
export class RateLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxBurstSize" })
  maxBurstSize?: number;

  @Metadata({ data: "json, name=maxConcurrentDispatches" })
  maxConcurrentDispatches?: number;

  @Metadata({ data: "json, name=maxDispatchesPerSecond" })
  maxDispatchesPerSecond?: number;
}
