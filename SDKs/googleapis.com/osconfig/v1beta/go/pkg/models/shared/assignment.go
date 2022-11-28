package shared

// Assignment
// An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones.
type Assignment struct {
	GroupLabels          []AssignmentGroupLabel `json:"groupLabels,omitempty"`
	InstanceNamePrefixes []string               `json:"instanceNamePrefixes,omitempty"`
	Instances            []string               `json:"instances,omitempty"`
	OsTypes              []AssignmentOsType     `json:"osTypes,omitempty"`
	Zones                []string               `json:"zones,omitempty"`
}
