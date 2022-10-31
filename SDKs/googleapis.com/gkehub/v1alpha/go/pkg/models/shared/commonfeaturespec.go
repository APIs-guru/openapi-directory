package shared



type CommonFeatureSpec struct {
    Anthosobservability *AnthosObservabilityFeatureSpec `json:"anthosobservability,omitempty"`
    Appdevexperience map[string]interface{} `json:"appdevexperience,omitempty"`
    Cloudauditlogging *CloudAuditLoggingFeatureSpec `json:"cloudauditlogging,omitempty"`
    Multiclusteringress *MultiClusterIngressFeatureSpec `json:"multiclusteringress,omitempty"`
    Workloadcertificate *FeatureSpec `json:"workloadcertificate,omitempty"`
    
}

