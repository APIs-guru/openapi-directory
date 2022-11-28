package shared

type MatterStateEnum string

const (
	MatterStateEnumStateUnspecified MatterStateEnum = "STATE_UNSPECIFIED"
	MatterStateEnumOpen             MatterStateEnum = "OPEN"
	MatterStateEnumClosed           MatterStateEnum = "CLOSED"
	MatterStateEnumDeleted          MatterStateEnum = "DELETED"
)

// Matter
// Represents a matter. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
type Matter struct {
	Description       *string            `json:"description,omitempty"`
	MatterID          *string            `json:"matterId,omitempty"`
	MatterPermissions []MatterPermission `json:"matterPermissions,omitempty"`
	Name              *string            `json:"name,omitempty"`
	State             *MatterStateEnum   `json:"state,omitempty"`
}
