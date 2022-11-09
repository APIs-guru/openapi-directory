import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StructuredMessage } from "./structuredmessage";

export enum AutoscalingEventEventTypeEnum {
    TypeUnknown = "TYPE_UNKNOWN"
,    TargetNumWorkersChanged = "TARGET_NUM_WORKERS_CHANGED"
,    CurrentNumWorkersChanged = "CURRENT_NUM_WORKERS_CHANGED"
,    ActuationFailure = "ACTUATION_FAILURE"
,    NoChange = "NO_CHANGE"
}


// AutoscalingEvent
/** 
 * A structured message reporting an autoscaling decision made by the Dataflow service.
**/
export class AutoscalingEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentNumWorkers" })
  currentNumWorkers?: string;

  @Metadata({ data: "json, name=description" })
  description?: StructuredMessage;

  @Metadata({ data: "json, name=eventType" })
  eventType?: AutoscalingEventEventTypeEnum;

  @Metadata({ data: "json, name=targetNumWorkers" })
  targetNumWorkers?: string;

  @Metadata({ data: "json, name=time" })
  time?: string;

  @Metadata({ data: "json, name=workerPool" })
  workerPool?: string;
}
