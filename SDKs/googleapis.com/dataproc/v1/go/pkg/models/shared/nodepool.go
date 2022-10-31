package shared




type NodePoolRepairActionEnum string

const (
    NodePoolRepairActionEnumRepairActionUnspecified NodePoolRepairActionEnum = "REPAIR_ACTION_UNSPECIFIED"
NodePoolRepairActionEnumDelete NodePoolRepairActionEnum = "DELETE"
)


type NodePool struct {
    ID *string `json:"id,omitempty"`
    InstanceNames []string `json:"instanceNames,omitempty"`
    RepairAction *NodePoolRepairActionEnum `json:"repairAction,omitempty"`
    
}

