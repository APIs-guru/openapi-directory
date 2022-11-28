package shared

// ServiceStatus
// The current state of the Service. Output only.
type ServiceStatus struct {
	Address                   *Addressable                `json:"address,omitempty"`
	Conditions                []GoogleCloudRunV1Condition `json:"conditions,omitempty"`
	LatestCreatedRevisionName *string                     `json:"latestCreatedRevisionName,omitempty"`
	LatestReadyRevisionName   *string                     `json:"latestReadyRevisionName,omitempty"`
	ObservedGeneration        *int32                      `json:"observedGeneration,omitempty"`
	Traffic                   []TrafficTarget             `json:"traffic,omitempty"`
	URL                       *string                     `json:"url,omitempty"`
}

// ServiceStatusInput
// The current state of the Service. Output only.
type ServiceStatusInput struct {
	Address                   *Addressable                `json:"address,omitempty"`
	Conditions                []GoogleCloudRunV1Condition `json:"conditions,omitempty"`
	LatestCreatedRevisionName *string                     `json:"latestCreatedRevisionName,omitempty"`
	LatestReadyRevisionName   *string                     `json:"latestReadyRevisionName,omitempty"`
	ObservedGeneration        *int32                      `json:"observedGeneration,omitempty"`
	Traffic                   []TrafficTargetInput        `json:"traffic,omitempty"`
	URL                       *string                     `json:"url,omitempty"`
}
