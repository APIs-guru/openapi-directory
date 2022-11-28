package shared

// ConfigurationStatus
// ConfigurationStatus communicates the observed state of the Configuration (from the controller).
type ConfigurationStatus struct {
	Conditions                []GoogleCloudRunV1Condition `json:"conditions,omitempty"`
	LatestCreatedRevisionName *string                     `json:"latestCreatedRevisionName,omitempty"`
	LatestReadyRevisionName   *string                     `json:"latestReadyRevisionName,omitempty"`
	ObservedGeneration        *int32                      `json:"observedGeneration,omitempty"`
}
