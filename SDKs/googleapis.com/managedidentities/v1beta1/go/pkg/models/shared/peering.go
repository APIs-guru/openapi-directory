package shared

type PeeringStateEnum string

const (
	PeeringStateEnumStateUnspecified PeeringStateEnum = "STATE_UNSPECIFIED"
	PeeringStateEnumCreating         PeeringStateEnum = "CREATING"
	PeeringStateEnumConnected        PeeringStateEnum = "CONNECTED"
	PeeringStateEnumDisconnected     PeeringStateEnum = "DISCONNECTED"
	PeeringStateEnumDeleting         PeeringStateEnum = "DELETING"
)

type Peering struct {
	AuthorizedNetwork *string           `json:"authorizedNetwork"`
	CreateTime        *string           `json:"createTime"`
	DomainResource    *string           `json:"domainResource"`
	Labels            map[string]string `json:"labels"`
	Name              *string           `json:"name"`
	State             *PeeringStateEnum `json:"state"`
	StatusMessage     *string           `json:"statusMessage"`
	UpdateTime        *string           `json:"updateTime"`
}
