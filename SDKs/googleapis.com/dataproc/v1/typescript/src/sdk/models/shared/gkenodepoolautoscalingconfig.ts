import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GkeNodePoolAutoscalingConfig
/** 
 * GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to the current cluster usage.
**/
export class GkeNodePoolAutoscalingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxNodeCount" })
  maxNodeCount?: number;

  @Metadata({ data: "json, name=minNodeCount" })
  minNodeCount?: number;
}
