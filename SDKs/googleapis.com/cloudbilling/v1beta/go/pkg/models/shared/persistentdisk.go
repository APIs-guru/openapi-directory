package shared

type PersistentDiskScopeEnum string

const (
	PersistentDiskScopeEnumScopeUnspecified PersistentDiskScopeEnum = "SCOPE_UNSPECIFIED"
	PersistentDiskScopeEnumScopeZonal       PersistentDiskScopeEnum = "SCOPE_ZONAL"
	PersistentDiskScopeEnumScopeRegional    PersistentDiskScopeEnum = "SCOPE_REGIONAL"
)

// PersistentDisk
// Specification of a persistent disk attached to a VM.
type PersistentDisk struct {
	DiskSize        *Usage                   `json:"diskSize,omitempty"`
	DiskType        *string                  `json:"diskType,omitempty"`
	ProvisionedIops *Usage                   `json:"provisionedIops,omitempty"`
	Scope           *PersistentDiskScopeEnum `json:"scope,omitempty"`
}
