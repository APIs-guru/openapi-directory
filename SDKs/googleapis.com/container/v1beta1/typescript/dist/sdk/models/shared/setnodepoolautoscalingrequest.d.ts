import { SpeakeasyBase } from "../../../internal/utils";
import { NodePoolAutoscaling } from "./nodepoolautoscaling";
/**
 * SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool.
**/
export declare class SetNodePoolAutoscalingRequest extends SpeakeasyBase {
    autoscaling?: NodePoolAutoscaling;
    clusterId?: string;
    name?: string;
    nodePoolId?: string;
    projectId?: string;
    zone?: string;
}
