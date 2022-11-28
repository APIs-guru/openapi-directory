package shared

type PeeringStateEnum string

const (
	PeeringStateEnumStateUnspecified PeeringStateEnum = "STATE_UNSPECIFIED"
	PeeringStateEnumCreating         PeeringStateEnum = "CREATING"
	PeeringStateEnumConnected        PeeringStateEnum = "CONNECTED"
	PeeringStateEnumDisconnected     PeeringStateEnum = "DISCONNECTED"
	PeeringStateEnumDeleting         PeeringStateEnum = "DELETING"
)

// Peering
// Represents a Managed Microsoft Identities Peering.
type Peering struct {
	AuthorizedNetwork *string           `json:"authorizedNetwork,omitempty"`
	CreateTime        *string           `json:"createTime,omitempty"`
	DomainResource    *string           `json:"domainResource,omitempty"`
	Labels            map[string]string `json:"labels,omitempty"`
	Name              *string           `json:"name,omitempty"`
	State             *PeeringStateEnum `json:"state,omitempty"`
	StatusMessage     *string           `json:"statusMessage,omitempty"`
	UpdateTime        *string           `json:"updateTime,omitempty"`
}

// PeeringInput
// Represents a Managed Microsoft Identities Peering.
type PeeringInput struct {
	AuthorizedNetwork *string           `json:"authorizedNetwork,omitempty"`
	DomainResource    *string           `json:"domainResource,omitempty"`
	Labels            map[string]string `json:"labels,omitempty"`
}
