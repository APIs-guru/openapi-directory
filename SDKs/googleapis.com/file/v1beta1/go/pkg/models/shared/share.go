package shared

type ShareStateEnum string

const (
	ShareStateEnumStateUnspecified ShareStateEnum = "STATE_UNSPECIFIED"
	ShareStateEnumCreating         ShareStateEnum = "CREATING"
	ShareStateEnumReady            ShareStateEnum = "READY"
	ShareStateEnumDeleting         ShareStateEnum = "DELETING"
)

type Share struct {
	CapacityGb       *string            `json:"capacityGb"`
	CreateTime       *string            `json:"createTime"`
	Description      *string            `json:"description"`
	Labels           map[string]string  `json:"labels"`
	MountName        *string            `json:"mountName"`
	Name             *string            `json:"name"`
	NfsExportOptions []NfsExportOptions `json:"nfsExportOptions"`
	State            *ShareStateEnum    `json:"state"`
}
