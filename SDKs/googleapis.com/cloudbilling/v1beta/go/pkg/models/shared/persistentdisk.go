package shared

type PersistentDiskScopeEnum string

const (
	PersistentDiskScopeEnumScopeUnspecified PersistentDiskScopeEnum = "SCOPE_UNSPECIFIED"
	PersistentDiskScopeEnumScopeZonal       PersistentDiskScopeEnum = "SCOPE_ZONAL"
	PersistentDiskScopeEnumScopeRegional    PersistentDiskScopeEnum = "SCOPE_REGIONAL"
)

type PersistentDisk struct {
	DiskSize        *Usage                   `json:"diskSize"`
	DiskType        *string                  `json:"diskType"`
	ProvisionedIops *Usage                   `json:"provisionedIops"`
	Scope           *PersistentDiskScopeEnum `json:"scope"`
}
