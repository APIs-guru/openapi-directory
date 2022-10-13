package shared

type AgentPoolStateEnum string

const (
	AgentPoolStateEnumStateUnspecified AgentPoolStateEnum = "STATE_UNSPECIFIED"
	AgentPoolStateEnumCreating         AgentPoolStateEnum = "CREATING"
	AgentPoolStateEnumCreated          AgentPoolStateEnum = "CREATED"
	AgentPoolStateEnumDeleting         AgentPoolStateEnum = "DELETING"
)

type AgentPool struct {
	BandwidthLimit *BandwidthLimit     `json:"bandwidthLimit"`
	DisplayName    *string             `json:"displayName"`
	Name           *string             `json:"name"`
	State          *AgentPoolStateEnum `json:"state"`
}
