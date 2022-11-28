import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NodePoolAutoscalingLocationPolicyEnum {
    LocationPolicyUnspecified = "LOCATION_POLICY_UNSPECIFIED",
    Balanced = "BALANCED",
    Any = "ANY"
}


// NodePoolAutoscaling
/** 
 * NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
**/
export class NodePoolAutoscaling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoprovisioned" })
  autoprovisioned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=locationPolicy" })
  locationPolicy?: NodePoolAutoscalingLocationPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=maxNodeCount" })
  maxNodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=minNodeCount" })
  minNodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalMaxNodeCount" })
  totalMaxNodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalMinNodeCount" })
  totalMinNodeCount?: number;
}
