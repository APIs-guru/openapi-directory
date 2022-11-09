import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NodePoolAutoscaling } from "./nodepoolautoscaling";
import { StatusCondition } from "./statuscondition";
import { NodeConfig } from "./nodeconfig";
import { NodeManagement } from "./nodemanagement";
import { MaxPodsConstraint } from "./maxpodsconstraint";
import { NodeNetworkConfig } from "./nodenetworkconfig";
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
 * NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload.
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
