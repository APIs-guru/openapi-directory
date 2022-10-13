package shared

type ServiceStatus struct {
	Address                   *Addressable                `json:"address"`
	Conditions                []GoogleCloudRunV1Condition `json:"conditions"`
	LatestCreatedRevisionName *string                     `json:"latestCreatedRevisionName"`
	LatestReadyRevisionName   *string                     `json:"latestReadyRevisionName"`
	ObservedGeneration        *int32                      `json:"observedGeneration"`
	Traffic                   []TrafficTarget             `json:"traffic"`
	URL                       *string                     `json:"url"`
}
