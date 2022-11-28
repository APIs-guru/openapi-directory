package shared

// OsPolicyAssignmentInstanceFilterInventory
// VM inventory details.
type OsPolicyAssignmentInstanceFilterInventory struct {
	OsShortName *string `json:"osShortName,omitempty"`
	OsVersion   *string `json:"osVersion,omitempty"`
}
