import { SpeakeasyBase } from "../../../internal/utils";
import { AutoscalingLimits } from "./autoscalinglimits";
import { AutoscalingTargets } from "./autoscalingtargets";
/**
 * Autoscaling config for a cluster.
**/
export declare class ClusterAutoscalingConfig extends SpeakeasyBase {
    autoscalingLimits?: AutoscalingLimits;
    autoscalingTargets?: AutoscalingTargets;
}
