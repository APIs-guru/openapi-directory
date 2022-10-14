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
	Host            *string             `json:"host,omitempty"`
	NodeID          *string             `json:"nodeId,omitempty"`
	Parameters      *MemcacheParameters `json:"parameters,omitempty"`
	Port            *int32              `json:"port,omitempty"`
	State           *NodeStateEnum      `json:"state,omitempty"`
	UpdateAvailable *bool               `json:"updateAvailable,omitempty"`
	Zone            *string             `json:"zone,omitempty"`
}
