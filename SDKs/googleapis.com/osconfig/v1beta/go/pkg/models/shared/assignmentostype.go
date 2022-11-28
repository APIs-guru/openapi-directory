package shared

// AssignmentOsType
// Defines the criteria for selecting VM Instances by OS type.
type AssignmentOsType struct {
	OsArchitecture *string `json:"osArchitecture,omitempty"`
	OsShortName    *string `json:"osShortName,omitempty"`
	OsVersion      *string `json:"osVersion,omitempty"`
}
