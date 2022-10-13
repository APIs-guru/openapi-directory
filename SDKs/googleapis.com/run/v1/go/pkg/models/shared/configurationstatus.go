package shared

type ConfigurationStatus struct {
	Conditions                []GoogleCloudRunV1Condition `json:"conditions"`
	LatestCreatedRevisionName *string                     `json:"latestCreatedRevisionName"`
	LatestReadyRevisionName   *string                     `json:"latestReadyRevisionName"`
	ObservedGeneration        *int32                      `json:"observedGeneration"`
}
