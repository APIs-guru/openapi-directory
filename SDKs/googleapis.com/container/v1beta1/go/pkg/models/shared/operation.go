package shared




type OperationOperationTypeEnum string

const (
    OperationOperationTypeEnumTypeUnspecified OperationOperationTypeEnum = "TYPE_UNSPECIFIED"
OperationOperationTypeEnumCreateCluster OperationOperationTypeEnum = "CREATE_CLUSTER"
OperationOperationTypeEnumDeleteCluster OperationOperationTypeEnum = "DELETE_CLUSTER"
OperationOperationTypeEnumUpgradeMaster OperationOperationTypeEnum = "UPGRADE_MASTER"
OperationOperationTypeEnumUpgradeNodes OperationOperationTypeEnum = "UPGRADE_NODES"
OperationOperationTypeEnumRepairCluster OperationOperationTypeEnum = "REPAIR_CLUSTER"
OperationOperationTypeEnumUpdateCluster OperationOperationTypeEnum = "UPDATE_CLUSTER"
OperationOperationTypeEnumCreateNodePool OperationOperationTypeEnum = "CREATE_NODE_POOL"
OperationOperationTypeEnumDeleteNodePool OperationOperationTypeEnum = "DELETE_NODE_POOL"
OperationOperationTypeEnumSetNodePoolManagement OperationOperationTypeEnum = "SET_NODE_POOL_MANAGEMENT"
OperationOperationTypeEnumAutoRepairNodes OperationOperationTypeEnum = "AUTO_REPAIR_NODES"
OperationOperationTypeEnumAutoUpgradeNodes OperationOperationTypeEnum = "AUTO_UPGRADE_NODES"
OperationOperationTypeEnumSetLabels OperationOperationTypeEnum = "SET_LABELS"
OperationOperationTypeEnumSetMasterAuth OperationOperationTypeEnum = "SET_MASTER_AUTH"
OperationOperationTypeEnumSetNodePoolSize OperationOperationTypeEnum = "SET_NODE_POOL_SIZE"
OperationOperationTypeEnumSetNetworkPolicy OperationOperationTypeEnum = "SET_NETWORK_POLICY"
OperationOperationTypeEnumSetMaintenancePolicy OperationOperationTypeEnum = "SET_MAINTENANCE_POLICY"
)



type OperationStatusEnum string

const (
    OperationStatusEnumStatusUnspecified OperationStatusEnum = "STATUS_UNSPECIFIED"
OperationStatusEnumPending OperationStatusEnum = "PENDING"
OperationStatusEnumRunning OperationStatusEnum = "RUNNING"
OperationStatusEnumDone OperationStatusEnum = "DONE"
OperationStatusEnumAborting OperationStatusEnum = "ABORTING"
)


type Operation struct {
    ClusterConditions []StatusCondition `json:"clusterConditions,omitempty"`
    Detail *string `json:"detail,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    Error *Status `json:"error,omitempty"`
    Location *string `json:"location,omitempty"`
    Name *string `json:"name,omitempty"`
    NodepoolConditions []StatusCondition `json:"nodepoolConditions,omitempty"`
    OperationType *OperationOperationTypeEnum `json:"operationType,omitempty"`
    Progress *OperationProgress `json:"progress,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    Status *OperationStatusEnum `json:"status,omitempty"`
    StatusMessage *string `json:"statusMessage,omitempty"`
    TargetLink *string `json:"targetLink,omitempty"`
    Zone *string `json:"zone,omitempty"`
    
}

