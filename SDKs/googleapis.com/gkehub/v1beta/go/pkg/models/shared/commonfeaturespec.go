package shared



type CommonFeatureSpec struct {
    Anthosobservability *AnthosObservabilityFeatureSpec `json:"anthosobservability,omitempty"`
    Appdevexperience map[string]interface{} `json:"appdevexperience,omitempty"`
    Multiclusteringress *MultiClusterIngressFeatureSpec `json:"multiclusteringress,omitempty"`
    
}

