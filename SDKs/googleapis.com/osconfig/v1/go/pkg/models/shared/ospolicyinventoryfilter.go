package shared

// OsPolicyInventoryFilter
// Filtering criteria to select VMs based on inventory details.
type OsPolicyInventoryFilter struct {
	OsShortName *string `json:"osShortName,omitempty"`
	OsVersion   *string `json:"osVersion,omitempty"`
}
