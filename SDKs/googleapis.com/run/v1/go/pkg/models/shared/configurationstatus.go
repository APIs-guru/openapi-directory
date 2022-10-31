package shared



type ConfigurationStatus struct {
    Conditions []GoogleCloudRunV1Condition `json:"conditions,omitempty"`
    LatestCreatedRevisionName *string `json:"latestCreatedRevisionName,omitempty"`
    LatestReadyRevisionName *string `json:"latestReadyRevisionName,omitempty"`
    ObservedGeneration *int32 `json:"observedGeneration,omitempty"`
    
}

