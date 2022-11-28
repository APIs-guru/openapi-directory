package shared

// DomainMappingStatus
// The current state of the Domain Mapping.
type DomainMappingStatus struct {
	Conditions         []GoogleCloudRunV1Condition `json:"conditions,omitempty"`
	MappedRouteName    *string                     `json:"mappedRouteName,omitempty"`
	ObservedGeneration *int32                      `json:"observedGeneration,omitempty"`
	ResourceRecords    []ResourceRecord            `json:"resourceRecords,omitempty"`
	URL                *string                     `json:"url,omitempty"`
}
