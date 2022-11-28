import { SpeakeasyBase } from "../../../internal/utils";
import { BasicAutoscalingAlgorithm } from "./basicautoscalingalgorithm";
import { InstanceGroupAutoscalingPolicyConfig } from "./instancegroupautoscalingpolicyconfig";
/**
 * Describes an autoscaling policy for Dataproc cluster autoscaler.
**/
export declare class AutoscalingPolicy extends SpeakeasyBase {
    basicAlgorithm?: BasicAutoscalingAlgorithm;
    id?: string;
    labels?: Map<string, string>;
    name?: string;
    secondaryWorkerConfig?: InstanceGroupAutoscalingPolicyConfig;
    workerConfig?: InstanceGroupAutoscalingPolicyConfig;
}
/**
 * Describes an autoscaling policy for Dataproc cluster autoscaler.
**/
export declare class AutoscalingPolicyInput extends SpeakeasyBase {
    basicAlgorithm?: BasicAutoscalingAlgorithm;
    id?: string;
    labels?: Map<string, string>;
    secondaryWorkerConfig?: InstanceGroupAutoscalingPolicyConfig;
    workerConfig?: InstanceGroupAutoscalingPolicyConfig;
}
