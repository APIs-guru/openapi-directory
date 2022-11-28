import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Provisioning = "PROVISIONING",
    Running = "RUNNING",
    RunningWithError = "RUNNING_WITH_ERROR",
    Reconciling = "RECONCILING",
    Stopping = "STOPPING",
    Error = "ERROR"
}


// NodePool
/** 
 * NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload.
**/
export class NodePool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoscaling" })
  autoscaling?: NodePoolAutoscaling;

  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: StatusCondition })
  conditions?: StatusCondition[];

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: NodeConfig;

  @SpeakeasyMetadata({ data: "json, name=initialNodeCount" })
  initialNodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=instanceGroupUrls" })
  instanceGroupUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=locations" })
  locations?: string[];

  @SpeakeasyMetadata({ data: "json, name=management" })
  management?: NodeManagement;

  @SpeakeasyMetadata({ data: "json, name=maxPodsConstraint" })
  maxPodsConstraint?: MaxPodsConstraint;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: NodeNetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=placementPolicy" })
  placementPolicy?: PlacementPolicy;

  @SpeakeasyMetadata({ data: "json, name=podIpv4CidrSize" })
  podIpv4CidrSize?: number;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: NodePoolStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=updateInfo" })
  updateInfo?: UpdateInfo;

  @SpeakeasyMetadata({ data: "json, name=upgradeSettings" })
  upgradeSettings?: UpgradeSettings;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
