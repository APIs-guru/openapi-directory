import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for the size bounds of an instance group, including its proportional size to other groups.
**/
export declare class InstanceGroupAutoscalingPolicyConfig extends SpeakeasyBase {
    maxInstances?: number;
    minInstances?: number;
    weight?: number;
}
