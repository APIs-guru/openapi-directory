import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoprovisioningNodePoolDefaults } from "./autoprovisioningnodepooldefaults";
import { ResourceLimit } from "./resourcelimit";


export enum ClusterAutoscalingAutoscalingProfileEnum {
    ProfileUnspecified = "PROFILE_UNSPECIFIED",
    OptimizeUtilization = "OPTIMIZE_UTILIZATION",
    Balanced = "BALANCED"
}


// ClusterAutoscaling
/** 
 * ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs.
**/
export class ClusterAutoscaling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoprovisioningLocations" })
  autoprovisioningLocations?: string[];

  @SpeakeasyMetadata({ data: "json, name=autoprovisioningNodePoolDefaults" })
  autoprovisioningNodePoolDefaults?: AutoprovisioningNodePoolDefaults;

  @SpeakeasyMetadata({ data: "json, name=autoscalingProfile" })
  autoscalingProfile?: ClusterAutoscalingAutoscalingProfileEnum;

  @SpeakeasyMetadata({ data: "json, name=enableNodeAutoprovisioning" })
  enableNodeAutoprovisioning?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resourceLimits", elemType: ResourceLimit })
  resourceLimits?: ResourceLimit[];
}
