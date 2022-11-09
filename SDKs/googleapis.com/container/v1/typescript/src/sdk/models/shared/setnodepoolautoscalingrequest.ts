import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NodePoolAutoscaling } from "./nodepoolautoscaling";


// SetNodePoolAutoscalingRequest
/** 
 * SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool.
**/
export class SetNodePoolAutoscalingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoscaling" })
  autoscaling?: NodePoolAutoscaling;

  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nodePoolId" })
  nodePoolId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
