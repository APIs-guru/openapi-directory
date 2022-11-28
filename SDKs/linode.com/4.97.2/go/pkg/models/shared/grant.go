package shared

type GrantPermissionsEnum string

const (
	GrantPermissionsEnumReadOnly  GrantPermissionsEnum = "read_only"
	GrantPermissionsEnumReadWrite GrantPermissionsEnum = "read_write"
)

// GrantInput
// Represents the level of access a restricted User has to a specific resource on the Account.
type GrantInput struct {
	ID          *int64                `json:"id,omitempty"`
	Permissions *GrantPermissionsEnum `json:"permissions,omitempty"`
}

// Grant
// Represents the level of access a restricted User has to a specific resource on the Account.
type Grant struct {
	ID          *int64                `json:"id,omitempty"`
	Label       *string               `json:"label,omitempty"`
	Permissions *GrantPermissionsEnum `json:"permissions,omitempty"`
}
