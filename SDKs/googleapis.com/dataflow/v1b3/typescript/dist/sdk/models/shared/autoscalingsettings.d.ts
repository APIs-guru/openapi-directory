import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AutoscalingSettingsAlgorithmEnum {
    AutoscalingAlgorithmUnknown = "AUTOSCALING_ALGORITHM_UNKNOWN",
    AutoscalingAlgorithmNone = "AUTOSCALING_ALGORITHM_NONE",
    AutoscalingAlgorithmBasic = "AUTOSCALING_ALGORITHM_BASIC"
}
/**
 * Settings for WorkerPool autoscaling.
**/
export declare class AutoscalingSettings extends SpeakeasyBase {
    algorithm?: AutoscalingSettingsAlgorithmEnum;
    maxNumWorkers?: number;
}
