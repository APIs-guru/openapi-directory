package shared

type NodePoolRepairActionEnum string

const (
	NodePoolRepairActionEnumRepairActionUnspecified NodePoolRepairActionEnum = "REPAIR_ACTION_UNSPECIFIED"
	NodePoolRepairActionEnumDelete                  NodePoolRepairActionEnum = "DELETE"
)

type NodePool struct {
	ID            *string                   `json:"id"`
	InstanceNames []string                  `json:"instanceNames"`
	RepairAction  *NodePoolRepairActionEnum `json:"repairAction"`
}
