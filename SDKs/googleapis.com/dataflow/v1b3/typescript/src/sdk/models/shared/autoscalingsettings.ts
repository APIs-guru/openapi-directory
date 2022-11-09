import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AutoscalingSettingsAlgorithmEnum {
    AutoscalingAlgorithmUnknown = "AUTOSCALING_ALGORITHM_UNKNOWN"
,    AutoscalingAlgorithmNone = "AUTOSCALING_ALGORITHM_NONE"
,    AutoscalingAlgorithmBasic = "AUTOSCALING_ALGORITHM_BASIC"
}


// AutoscalingSettings
/** 
 * Settings for WorkerPool autoscaling.
**/
export class AutoscalingSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: AutoscalingSettingsAlgorithmEnum;

  @Metadata({ data: "json, name=maxNumWorkers" })
  maxNumWorkers?: number;
}
