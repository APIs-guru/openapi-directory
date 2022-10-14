package shared

type PatchInstanceFilter struct {
	All                  *bool                           `json:"all,omitempty"`
	GroupLabels          []PatchInstanceFilterGroupLabel `json:"groupLabels,omitempty"`
	InstanceNamePrefixes []string                        `json:"instanceNamePrefixes,omitempty"`
	Instances            []string                        `json:"instances,omitempty"`
	Zones                []string                        `json:"zones,omitempty"`
}
