package shared

type ShareStateEnum string

const (
	ShareStateEnumStateUnspecified ShareStateEnum = "STATE_UNSPECIFIED"
	ShareStateEnumCreating         ShareStateEnum = "CREATING"
	ShareStateEnumReady            ShareStateEnum = "READY"
	ShareStateEnumDeleting         ShareStateEnum = "DELETING"
)

type Share struct {
	CapacityGb       *string            `json:"capacityGb,omitempty"`
	CreateTime       *string            `json:"createTime,omitempty"`
	Description      *string            `json:"description,omitempty"`
	Labels           map[string]string  `json:"labels,omitempty"`
	MountName        *string            `json:"mountName,omitempty"`
	Name             *string            `json:"name,omitempty"`
	NfsExportOptions []NfsExportOptions `json:"nfsExportOptions,omitempty"`
	State            *ShareStateEnum    `json:"state,omitempty"`
}
