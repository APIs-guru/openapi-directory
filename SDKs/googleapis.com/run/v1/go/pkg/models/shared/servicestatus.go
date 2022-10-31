package shared

type ServiceStatus struct {
	Address                   *Addressable                `json:"address,omitempty"`
	Conditions                []GoogleCloudRunV1Condition `json:"conditions,omitempty"`
	LatestCreatedRevisionName *string                     `json:"latestCreatedRevisionName,omitempty"`
	LatestReadyRevisionName   *string                     `json:"latestReadyRevisionName,omitempty"`
	ObservedGeneration        *int32                      `json:"observedGeneration,omitempty"`
	Traffic                   []TrafficTarget             `json:"traffic,omitempty"`
	URL                       *string                     `json:"url,omitempty"`
}
