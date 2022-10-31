package shared



type RevisionStatus struct {
    Conditions []GoogleCloudRunV1Condition `json:"conditions,omitempty"`
    ImageDigest *string `json:"imageDigest,omitempty"`
    LogURL *string `json:"logUrl,omitempty"`
    ObservedGeneration *int32 `json:"observedGeneration,omitempty"`
    ServiceName *string `json:"serviceName,omitempty"`
    
}

