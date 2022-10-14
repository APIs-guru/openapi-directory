package shared

type MatterStateEnum string

const (
	MatterStateEnumStateUnspecified MatterStateEnum = "STATE_UNSPECIFIED"
	MatterStateEnumOpen             MatterStateEnum = "OPEN"
	MatterStateEnumClosed           MatterStateEnum = "CLOSED"
	MatterStateEnumDeleted          MatterStateEnum = "DELETED"
)

type Matter struct {
	Description       *string            `json:"description,omitempty"`
	MatterID          *string            `json:"matterId,omitempty"`
	MatterPermissions []MatterPermission `json:"matterPermissions,omitempty"`
	Name              *string            `json:"name,omitempty"`
	State             *MatterStateEnum   `json:"state,omitempty"`
}
