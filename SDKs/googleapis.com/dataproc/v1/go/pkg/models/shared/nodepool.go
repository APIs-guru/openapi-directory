package shared

type NodePoolRepairActionEnum string

const (
	NodePoolRepairActionEnumRepairActionUnspecified NodePoolRepairActionEnum = "REPAIR_ACTION_UNSPECIFIED"
	NodePoolRepairActionEnumDelete                  NodePoolRepairActionEnum = "DELETE"
)

// NodePool
// indicating a list of workers of same type
type NodePool struct {
	ID            *string                   `json:"id,omitempty"`
	InstanceNames []string                  `json:"instanceNames,omitempty"`
	RepairAction  *NodePoolRepairActionEnum `json:"repairAction,omitempty"`
}
