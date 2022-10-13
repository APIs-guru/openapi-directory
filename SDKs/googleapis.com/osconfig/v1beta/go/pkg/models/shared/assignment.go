package shared

type Assignment struct {
	GroupLabels          []AssignmentGroupLabel `json:"groupLabels"`
	InstanceNamePrefixes []string               `json:"instanceNamePrefixes"`
	Instances            []string               `json:"instances"`
	OsTypes              []AssignmentOsType     `json:"osTypes"`
	Zones                []string               `json:"zones"`
}
