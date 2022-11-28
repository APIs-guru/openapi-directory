import { SpeakeasyBase } from "../../../internal/utils";
import { StructuredMessage } from "./structuredmessage";
export declare enum AutoscalingEventEventTypeEnum {
    TypeUnknown = "TYPE_UNKNOWN",
    TargetNumWorkersChanged = "TARGET_NUM_WORKERS_CHANGED",
    CurrentNumWorkersChanged = "CURRENT_NUM_WORKERS_CHANGED",
    ActuationFailure = "ACTUATION_FAILURE",
    NoChange = "NO_CHANGE"
}
/**
 * A structured message reporting an autoscaling decision made by the Dataflow service.
**/
export declare class AutoscalingEvent extends SpeakeasyBase {
    currentNumWorkers?: string;
    description?: StructuredMessage;
    eventType?: AutoscalingEventEventTypeEnum;
    targetNumWorkers?: string;
    time?: string;
    workerPool?: string;
}
