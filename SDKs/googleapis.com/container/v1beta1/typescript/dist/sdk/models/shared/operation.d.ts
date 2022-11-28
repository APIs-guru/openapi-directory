import { SpeakeasyBase } from "../../../internal/utils";
import { StatusCondition } from "./statuscondition";
import { Status } from "./status";
import { OperationProgress } from "./operationprogress";
export declare enum OperationOperationTypeEnum {
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
export declare enum OperationStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Done = "DONE",
    Aborting = "ABORTING"
}
/**
 * This operation resource represents operations that may have happened or are happening on the cluster. All fields are output only.
**/
export declare class Operation extends SpeakeasyBase {
    clusterConditions?: StatusCondition[];
    detail?: string;
    endTime?: string;
    error?: Status;
    location?: string;
    name?: string;
    nodepoolConditions?: StatusCondition[];
    operationType?: OperationOperationTypeEnum;
    progress?: OperationProgress;
    selfLink?: string;
    startTime?: string;
    status?: OperationStatusEnum;
    statusMessage?: string;
    targetLink?: string;
    zone?: string;
}
