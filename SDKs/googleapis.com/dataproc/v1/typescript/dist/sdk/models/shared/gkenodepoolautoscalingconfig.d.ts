import { SpeakeasyBase } from "../../../internal/utils";
/**
 * GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to the current cluster usage.
**/
export declare class GkeNodePoolAutoscalingConfig extends SpeakeasyBase {
    maxNodeCount?: number;
    minNodeCount?: number;
}
