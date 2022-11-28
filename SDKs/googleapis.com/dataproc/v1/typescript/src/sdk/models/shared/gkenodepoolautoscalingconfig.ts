import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GkeNodePoolAutoscalingConfig
/** 
 * GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to the current cluster usage.
**/
export class GkeNodePoolAutoscalingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxNodeCount" })
  maxNodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=minNodeCount" })
  minNodeCount?: number;
}
