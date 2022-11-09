import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BasicAutoscalingAlgorithm } from "./basicautoscalingalgorithm";
import { InstanceGroupAutoscalingPolicyConfig } from "./instancegroupautoscalingpolicyconfig";
import { InstanceGroupAutoscalingPolicyConfig } from "./instancegroupautoscalingpolicyconfig";


// AutoscalingPolicy
/** 
 * Describes an autoscaling policy for Dataproc cluster autoscaler.
**/
export class AutoscalingPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicAlgorithm" })
  basicAlgorithm?: BasicAutoscalingAlgorithm;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=secondaryWorkerConfig" })
  secondaryWorkerConfig?: InstanceGroupAutoscalingPolicyConfig;

  @Metadata({ data: "json, name=workerConfig" })
  workerConfig?: InstanceGroupAutoscalingPolicyConfig;
}
