package shared

type GrantPermissionsEnum string

const (
	GrantPermissionsEnumReadOnly  GrantPermissionsEnum = "read_only"
	GrantPermissionsEnumReadWrite GrantPermissionsEnum = "read_write"
)

type Grant struct {
	ID          *int64                `json:"id"`
	Label       *string               `json:"label"`
	Permissions *GrantPermissionsEnum `json:"permissions"`
}
