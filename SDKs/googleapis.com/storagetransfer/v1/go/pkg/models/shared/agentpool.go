package shared

type AgentPoolStateEnum string

const (
	AgentPoolStateEnumStateUnspecified AgentPoolStateEnum = "STATE_UNSPECIFIED"
	AgentPoolStateEnumCreating         AgentPoolStateEnum = "CREATING"
	AgentPoolStateEnumCreated          AgentPoolStateEnum = "CREATED"
	AgentPoolStateEnumDeleting         AgentPoolStateEnum = "DELETING"
)

type AgentPool struct {
	BandwidthLimit *BandwidthLimit     `json:"bandwidthLimit,omitempty"`
	DisplayName    *string             `json:"displayName,omitempty"`
	Name           *string             `json:"name,omitempty"`
	State          *AgentPoolStateEnum `json:"state,omitempty"`
}
