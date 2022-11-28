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
 * NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload.
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
