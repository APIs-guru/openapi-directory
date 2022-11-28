import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoscalingLimits } from "./autoscalinglimits";
import { AutoscalingTargets } from "./autoscalingtargets";



// ClusterAutoscalingConfig
/** 
 * Autoscaling config for a cluster.
**/
export class ClusterAutoscalingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoscalingLimits" })
  autoscalingLimits?: AutoscalingLimits;

  @SpeakeasyMetadata({ data: "json, name=autoscalingTargets" })
  autoscalingTargets?: AutoscalingTargets;
}
