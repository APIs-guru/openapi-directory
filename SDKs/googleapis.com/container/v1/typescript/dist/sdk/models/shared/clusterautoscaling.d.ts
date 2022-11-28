import { SpeakeasyBase } from "../../../internal/utils";
import { AutoprovisioningNodePoolDefaults } from "./autoprovisioningnodepooldefaults";
import { ResourceLimit } from "./resourcelimit";
export declare enum ClusterAutoscalingAutoscalingProfileEnum {
    ProfileUnspecified = "PROFILE_UNSPECIFIED",
    OptimizeUtilization = "OPTIMIZE_UTILIZATION",
    Balanced = "BALANCED"
}
/**
 * ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs.
**/
export declare class ClusterAutoscaling extends SpeakeasyBase {
    autoprovisioningLocations?: string[];
    autoprovisioningNodePoolDefaults?: AutoprovisioningNodePoolDefaults;
    autoscalingProfile?: ClusterAutoscalingAutoscalingProfileEnum;
    enableNodeAutoprovisioning?: boolean;
    resourceLimits?: ResourceLimit[];
}
