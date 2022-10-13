package shared

type CommonFeatureSpec struct {
	Anthosobservability *AnthosObservabilityFeatureSpec `json:"anthosobservability"`
	Appdevexperience    map[string]interface{}          `json:"appdevexperience"`
	Cloudauditlogging   *CloudAuditLoggingFeatureSpec   `json:"cloudauditlogging"`
	Multiclusteringress *MultiClusterIngressFeatureSpec `json:"multiclusteringress"`
	Workloadcertificate *FeatureSpec                    `json:"workloadcertificate"`
}
