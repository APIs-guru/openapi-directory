import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StatusCondition } from "./statuscondition";
import { Status } from "./status";
import { StatusCondition } from "./statuscondition";
import { OperationProgress } from "./operationprogress";

export enum OperationOperationTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    CreateCluster = "CREATE_CLUSTER"
,    DeleteCluster = "DELETE_CLUSTER"
,    UpgradeMaster = "UPGRADE_MASTER"
,    UpgradeNodes = "UPGRADE_NODES"
,    RepairCluster = "REPAIR_CLUSTER"
,    UpdateCluster = "UPDATE_CLUSTER"
,    CreateNodePool = "CREATE_NODE_POOL"
,    DeleteNodePool = "DELETE_NODE_POOL"
,    SetNodePoolManagement = "SET_NODE_POOL_MANAGEMENT"
,    AutoRepairNodes = "AUTO_REPAIR_NODES"
,    AutoUpgradeNodes = "AUTO_UPGRADE_NODES"
,    SetLabels = "SET_LABELS"
,    SetMasterAuth = "SET_MASTER_AUTH"
,    SetNodePoolSize = "SET_NODE_POOL_SIZE"
,    SetNetworkPolicy = "SET_NETWORK_POLICY"
,    SetMaintenancePolicy = "SET_MAINTENANCE_POLICY"
}

export enum OperationStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED"
,    Pending = "PENDING"
,    Running = "RUNNING"
,    Done = "DONE"
,    Aborting = "ABORTING"
}


// Operation
/** 
 * This operation resource represents operations that may have happened or are happening on the cluster. All fields are output only.
**/
export class Operation extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterConditions", elemType: shared.StatusCondition })
  clusterConditions?: StatusCondition[];

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nodepoolConditions", elemType: shared.StatusCondition })
  nodepoolConditions?: StatusCondition[];

  @Metadata({ data: "json, name=operationType" })
  operationType?: OperationOperationTypeEnum;

  @Metadata({ data: "json, name=progress" })
  progress?: OperationProgress;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=status" })
  status?: OperationStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=targetLink" })
  targetLink?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
