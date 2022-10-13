package shared

type NodeStateEnum string

const (
	NodeStateEnumStateUnspecified NodeStateEnum = "STATE_UNSPECIFIED"
	NodeStateEnumCreating         NodeStateEnum = "CREATING"
	NodeStateEnumReady            NodeStateEnum = "READY"
	NodeStateEnumDeleting         NodeStateEnum = "DELETING"
	NodeStateEnumUpdating         NodeStateEnum = "UPDATING"
)

type Node struct {
	Host            *string             `json:"host"`
	NodeID          *string             `json:"nodeId"`
	Parameters      *MemcacheParameters `json:"parameters"`
	Port            *int32              `json:"port"`
	State           *NodeStateEnum      `json:"state"`
	UpdateAvailable *bool               `json:"updateAvailable"`
	Zone            *string             `json:"zone"`
}
