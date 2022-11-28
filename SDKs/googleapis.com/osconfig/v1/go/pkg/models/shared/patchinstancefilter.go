package shared

// PatchInstanceFilter
// A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.
type PatchInstanceFilter struct {
	All                  *bool                           `json:"all,omitempty"`
	GroupLabels          []PatchInstanceFilterGroupLabel `json:"groupLabels,omitempty"`
	InstanceNamePrefixes []string                        `json:"instanceNamePrefixes,omitempty"`
	Instances            []string                        `json:"instances,omitempty"`
	Zones                []string                        `json:"zones,omitempty"`
}
