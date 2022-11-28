package shared

// OsPolicyOsFilter
// Filtering criteria to select VMs based on OS details.
type OsPolicyOsFilter struct {
	OsShortName *string `json:"osShortName,omitempty"`
	OsVersion   *string `json:"osVersion,omitempty"`
}
