package shared

type AgentPoolStateEnum string

const (
	AgentPoolStateEnumStateUnspecified AgentPoolStateEnum = "STATE_UNSPECIFIED"
	AgentPoolStateEnumCreating         AgentPoolStateEnum = "CREATING"
	AgentPoolStateEnumCreated          AgentPoolStateEnum = "CREATED"
	AgentPoolStateEnumDeleting         AgentPoolStateEnum = "DELETING"
)

// AgentPoolInput
// Represents an On-Premises Agent pool.
type AgentPoolInput struct {
	BandwidthLimit *BandwidthLimit `json:"bandwidthLimit,omitempty"`
	DisplayName    *string         `json:"displayName,omitempty"`
	Name           *string         `json:"name,omitempty"`
}

// AgentPool
// Represents an On-Premises Agent pool.
type AgentPool struct {
	BandwidthLimit *BandwidthLimit     `json:"bandwidthLimit,omitempty"`
	DisplayName    *string             `json:"displayName,omitempty"`
	Name           *string             `json:"name,omitempty"`
	State          *AgentPoolStateEnum `json:"state,omitempty"`
}
