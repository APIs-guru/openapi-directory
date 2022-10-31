package shared

type Assignment struct {
	GroupLabels          []AssignmentGroupLabel `json:"groupLabels,omitempty"`
	InstanceNamePrefixes []string               `json:"instanceNamePrefixes,omitempty"`
	Instances            []string               `json:"instances,omitempty"`
	OsTypes              []AssignmentOsType     `json:"osTypes,omitempty"`
	Zones                []string               `json:"zones,omitempty"`
}
