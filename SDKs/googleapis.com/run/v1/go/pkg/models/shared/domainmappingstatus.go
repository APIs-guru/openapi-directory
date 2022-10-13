package shared

type DomainMappingStatus struct {
	Conditions         []GoogleCloudRunV1Condition `json:"conditions"`
	MappedRouteName    *string                     `json:"mappedRouteName"`
	ObservedGeneration *int32                      `json:"observedGeneration"`
	ResourceRecords    []ResourceRecord            `json:"resourceRecords"`
	URL                *string                     `json:"url"`
}
