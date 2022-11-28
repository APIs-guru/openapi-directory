import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StructuredMessage } from "./structuredmessage";


export enum AutoscalingEventEventTypeEnum {
    TypeUnknown = "TYPE_UNKNOWN",
    TargetNumWorkersChanged = "TARGET_NUM_WORKERS_CHANGED",
    CurrentNumWorkersChanged = "CURRENT_NUM_WORKERS_CHANGED",
    ActuationFailure = "ACTUATION_FAILURE",
    NoChange = "NO_CHANGE"
}


// AutoscalingEvent
/** 
 * A structured message reporting an autoscaling decision made by the Dataflow service.
**/
export class AutoscalingEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentNumWorkers" })
  currentNumWorkers?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: StructuredMessage;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: AutoscalingEventEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=targetNumWorkers" })
  targetNumWorkers?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;

  @SpeakeasyMetadata({ data: "json, name=workerPool" })
  workerPool?: string;
}
