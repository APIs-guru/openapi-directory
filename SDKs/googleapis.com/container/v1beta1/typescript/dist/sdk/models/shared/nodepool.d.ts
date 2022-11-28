import { SpeakeasyBase } from "../../../internal/utils";
import { NodePoolAutoscaling } from "./nodepoolautoscaling";
import { StatusCondition } from "./statuscondition";
import { NodeConfig } from "./nodeconfig";
import { NodeManagement } from "./nodemanagement";
import { MaxPodsConstraint } from "./maxpodsconstraint";
import { NodeNetworkConfig } from "./nodenetworkconfig";
import { PlacementPolicy } from "./placementpolicy";
import { UpdateInfo } from "./updateinfo";
import { UpgradeSettings } from "./upgradesettings";
export declare enum NodePoolStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Provisioning = "PROVISIONING",
    Running = "RUNNING",
    RunningWithError = "RUNNING_WITH_ERROR",
    Reconciling = "RECONCILING",
    Stopping = "STOPPING",
    Error = "ERROR"
}
/**
 * NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload. These upgrade settings control the level of parallelism and the level of disruption caused by an upgrade. maxUnavailable controls the number of nodes that can be simultaneously unavailable. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). Note: upgrades inevitably introduce some disruption since workloads need to be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0, this holds true. (Disruption stays within the limits of PodDisruptionBudget, if it is configured.) Consider a hypothetical node pool with 5 nodes having maxSurge=2, maxUnavailable=1. This means the upgrade process upgrades 3 nodes simultaneously. It creates 2 additional (upgraded) nodes, then it brings down 3 old (not yet upgraded) nodes at the same time. This ensures that there are always at least 4 nodes available.
**/
export declare class NodePool extends SpeakeasyBase {
    autoscaling?: NodePoolAutoscaling;
    conditions?: StatusCondition[];
    config?: NodeConfig;
    initialNodeCount?: number;
    instanceGroupUrls?: string[];
    locations?: string[];
    management?: NodeManagement;
    maxPodsConstraint?: MaxPodsConstraint;
    name?: string;
    networkConfig?: NodeNetworkConfig;
    placementPolicy?: PlacementPolicy;
    podIpv4CidrSize?: number;
    selfLink?: string;
    status?: NodePoolStatusEnum;
    statusMessage?: string;
    updateInfo?: UpdateInfo;
    upgradeSettings?: UpgradeSettings;
    version?: string;
}
