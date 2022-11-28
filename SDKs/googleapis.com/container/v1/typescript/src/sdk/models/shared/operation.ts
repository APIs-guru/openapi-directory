import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusCondition } from "./statuscondition";
import { Status } from "./status";
import { OperationProgress } from "./operationprogress";


export enum OperationOperationTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    CreateCluster = "CREATE_CLUSTER",
    DeleteCluster = "DELETE_CLUSTER",
    UpgradeMaster = "UPGRADE_MASTER",
    UpgradeNodes = "UPGRADE_NODES",
    RepairCluster = "REPAIR_CLUSTER",
    UpdateCluster = "UPDATE_CLUSTER",
    CreateNodePool = "CREATE_NODE_POOL",
    DeleteNodePool = "DELETE_NODE_POOL",
    SetNodePoolManagement = "SET_NODE_POOL_MANAGEMENT",
    AutoRepairNodes = "AUTO_REPAIR_NODES",
    AutoUpgradeNodes = "AUTO_UPGRADE_NODES",
    SetLabels = "SET_LABELS",
    SetMasterAuth = "SET_MASTER_AUTH",
    SetNodePoolSize = "SET_NODE_POOL_SIZE",
    SetNetworkPolicy = "SET_NETWORK_POLICY",
    SetMaintenancePolicy = "SET_MAINTENANCE_POLICY"
}

export enum OperationStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Done = "DONE",
    Aborting = "ABORTING"
}


// Operation
/** 
 * This operation resource represents operations that may have happened or are happening on the cluster. All fields are output only.
**/
export class Operation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterConditions", elemType: StatusCondition })
  clusterConditions?: StatusCondition[];

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodepoolConditions", elemType: StatusCondition })
  nodepoolConditions?: StatusCondition[];

  @SpeakeasyMetadata({ data: "json, name=operationType" })
  operationType?: OperationOperationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: OperationProgress;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OperationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=targetLink" })
  targetLink?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
