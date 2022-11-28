import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NodePoolAutoscalingLocationPolicyEnum {
    LocationPolicyUnspecified = "LOCATION_POLICY_UNSPECIFIED",
    Balanced = "BALANCED",
    Any = "ANY"
}
/**
 * NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
**/
export declare class NodePoolAutoscaling extends SpeakeasyBase {
    autoprovisioned?: boolean;
    enabled?: boolean;
    locationPolicy?: NodePoolAutoscalingLocationPolicyEnum;
    maxNodeCount?: number;
    minNodeCount?: number;
    totalMaxNodeCount?: number;
    totalMinNodeCount?: number;
}
