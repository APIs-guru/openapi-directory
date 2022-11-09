import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NodePoolAutoscaling } from "./nodepoolautoscaling";
import { StatusCondition } from "./statuscondition";
import { NodeConfig } from "./nodeconfig";
import { NodeManagement } from "./nodemanagement";
import { MaxPodsConstraint } from "./maxpodsconstraint";
import { NodeNetworkConfig } from "./nodenetworkconfig";
import { PlacementPolicy } from "./placementpolicy";
import { UpdateInfo } from "./updateinfo";
import { UpgradeSettings } from "./upgradesettings";

export enum NodePoolStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED"
,    Provisioning = "PROVISIONING"
,    Running = "RUNNING"
,    RunningWithError = "RUNNING_WITH_ERROR"
,    Reconciling = "RECONCILING"
,    Stopping = "STOPPING"
,    Error = "ERROR"
}


// NodePool
/** 
 * NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload. These upgrade settings control the level of parallelism and the level of disruption caused by an upgrade. maxUnavailable controls the number of nodes that can be simultaneously unavailable. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). Note: upgrades inevitably introduce some disruption since workloads need to be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0, this holds true. (Disruption stays within the limits of PodDisruptionBudget, if it is configured.) Consider a hypothetical node pool with 5 nodes having maxSurge=2, maxUnavailable=1. This means the upgrade process upgrades 3 nodes simultaneously. It creates 2 additional (upgraded) nodes, then it brings down 3 old (not yet upgraded) nodes at the same time. This ensures that there are always at least 4 nodes available.
**/
export class NodePool extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoscaling" })
  autoscaling?: NodePoolAutoscaling;

  @Metadata({ data: "json, name=conditions", elemType: shared.StatusCondition })
  conditions?: StatusCondition[];

  @Metadata({ data: "json, name=config" })
  config?: NodeConfig;

  @Metadata({ data: "json, name=initialNodeCount" })
  initialNodeCount?: number;

  @Metadata({ data: "json, name=instanceGroupUrls" })
  instanceGroupUrls?: string[];

  @Metadata({ data: "json, name=locations" })
  locations?: string[];

  @Metadata({ data: "json, name=management" })
  management?: NodeManagement;

  @Metadata({ data: "json, name=maxPodsConstraint" })
  maxPodsConstraint?: MaxPodsConstraint;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkConfig" })
  networkConfig?: NodeNetworkConfig;

  @Metadata({ data: "json, name=placementPolicy" })
  placementPolicy?: PlacementPolicy;

  @Metadata({ data: "json, name=podIpv4CidrSize" })
  podIpv4CidrSize?: number;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=status" })
  status?: NodePoolStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=updateInfo" })
  updateInfo?: UpdateInfo;

  @Metadata({ data: "json, name=upgradeSettings" })
  upgradeSettings?: UpgradeSettings;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
