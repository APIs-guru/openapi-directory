import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodePoolAutoscaling } from "./nodepoolautoscaling";



// SetNodePoolAutoscalingRequest
/** 
 * SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool.
**/
export class SetNodePoolAutoscalingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoscaling" })
  autoscaling?: NodePoolAutoscaling;

  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodePoolId" })
  nodePoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
