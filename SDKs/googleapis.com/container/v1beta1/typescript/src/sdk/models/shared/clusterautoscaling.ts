import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoprovisioningNodePoolDefaults } from "./autoprovisioningnodepooldefaults";
import { ResourceLimit } from "./resourcelimit";

export enum ClusterAutoscalingAutoscalingProfileEnum {
    ProfileUnspecified = "PROFILE_UNSPECIFIED"
,    OptimizeUtilization = "OPTIMIZE_UTILIZATION"
,    Balanced = "BALANCED"
}


// ClusterAutoscaling
/** 
 * ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs.
**/
export class ClusterAutoscaling extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoprovisioningLocations" })
  autoprovisioningLocations?: string[];

  @Metadata({ data: "json, name=autoprovisioningNodePoolDefaults" })
  autoprovisioningNodePoolDefaults?: AutoprovisioningNodePoolDefaults;

  @Metadata({ data: "json, name=autoscalingProfile" })
  autoscalingProfile?: ClusterAutoscalingAutoscalingProfileEnum;

  @Metadata({ data: "json, name=enableNodeAutoprovisioning" })
  enableNodeAutoprovisioning?: boolean;

  @Metadata({ data: "json, name=resourceLimits", elemType: shared.ResourceLimit })
  resourceLimits?: ResourceLimit[];
}
