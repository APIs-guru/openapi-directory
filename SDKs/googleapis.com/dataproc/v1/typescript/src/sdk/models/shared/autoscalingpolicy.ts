import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BasicAutoscalingAlgorithm } from "./basicautoscalingalgorithm";
import { InstanceGroupAutoscalingPolicyConfig } from "./instancegroupautoscalingpolicyconfig";



// AutoscalingPolicy
/** 
 * Describes an autoscaling policy for Dataproc cluster autoscaler.
**/
export class AutoscalingPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicAlgorithm" })
  basicAlgorithm?: BasicAutoscalingAlgorithm;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=secondaryWorkerConfig" })
  secondaryWorkerConfig?: InstanceGroupAutoscalingPolicyConfig;

  @SpeakeasyMetadata({ data: "json, name=workerConfig" })
  workerConfig?: InstanceGroupAutoscalingPolicyConfig;
}


// AutoscalingPolicyInput
/** 
 * Describes an autoscaling policy for Dataproc cluster autoscaler.
**/
export class AutoscalingPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicAlgorithm" })
  basicAlgorithm?: BasicAutoscalingAlgorithm;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=secondaryWorkerConfig" })
  secondaryWorkerConfig?: InstanceGroupAutoscalingPolicyConfig;

  @SpeakeasyMetadata({ data: "json, name=workerConfig" })
  workerConfig?: InstanceGroupAutoscalingPolicyConfig;
}
