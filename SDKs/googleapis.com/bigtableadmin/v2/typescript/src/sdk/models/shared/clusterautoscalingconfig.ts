import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoscalingLimits } from "./autoscalinglimits";
import { AutoscalingTargets } from "./autoscalingtargets";


// ClusterAutoscalingConfig
/** 
 * Autoscaling config for a cluster.
**/
export class ClusterAutoscalingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoscalingLimits" })
  autoscalingLimits?: AutoscalingLimits;

  @Metadata({ data: "json, name=autoscalingTargets" })
  autoscalingTargets?: AutoscalingTargets;
}
