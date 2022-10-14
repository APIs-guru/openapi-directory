package shared

type GrantPermissionsEnum string

const (
	GrantPermissionsEnumReadOnly  GrantPermissionsEnum = "read_only"
	GrantPermissionsEnumReadWrite GrantPermissionsEnum = "read_write"
)

type Grant struct {
	ID          *int64                `json:"id,omitempty"`
	Label       *string               `json:"label,omitempty"`
	Permissions *GrantPermissionsEnum `json:"permissions,omitempty"`
}
