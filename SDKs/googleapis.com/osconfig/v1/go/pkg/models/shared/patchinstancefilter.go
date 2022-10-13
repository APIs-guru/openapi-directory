package shared

type PatchInstanceFilter struct {
	All                  *bool                           `json:"all"`
	GroupLabels          []PatchInstanceFilterGroupLabel `json:"groupLabels"`
	InstanceNamePrefixes []string                        `json:"instanceNamePrefixes"`
	Instances            []string                        `json:"instances"`
	Zones                []string                        `json:"zones"`
}
