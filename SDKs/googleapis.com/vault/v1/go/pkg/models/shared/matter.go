package shared

type MatterStateEnum string

const (
	MatterStateEnumStateUnspecified MatterStateEnum = "STATE_UNSPECIFIED"
	MatterStateEnumOpen             MatterStateEnum = "OPEN"
	MatterStateEnumClosed           MatterStateEnum = "CLOSED"
	MatterStateEnumDeleted          MatterStateEnum = "DELETED"
)

type Matter struct {
	Description       *string            `json:"description"`
	MatterID          *string            `json:"matterId"`
	MatterPermissions []MatterPermission `json:"matterPermissions"`
	Name              *string            `json:"name"`
	State             *MatterStateEnum   `json:"state"`
}
