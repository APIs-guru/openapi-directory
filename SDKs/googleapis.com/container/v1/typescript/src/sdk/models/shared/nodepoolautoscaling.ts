import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NodePoolAutoscalingLocationPolicyEnum {
    LocationPolicyUnspecified = "LOCATION_POLICY_UNSPECIFIED"
,    Balanced = "BALANCED"
,    Any = "ANY"
}


// NodePoolAutoscaling
/** 
 * NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
**/
export class NodePoolAutoscaling extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoprovisioned" })
  autoprovisioned?: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=locationPolicy" })
  locationPolicy?: NodePoolAutoscalingLocationPolicyEnum;

  @Metadata({ data: "json, name=maxNodeCount" })
  maxNodeCount?: number;

  @Metadata({ data: "json, name=minNodeCount" })
  minNodeCount?: number;

  @Metadata({ data: "json, name=totalMaxNodeCount" })
  totalMaxNodeCount?: number;

  @Metadata({ data: "json, name=totalMinNodeCount" })
  totalMinNodeCount?: number;
}
