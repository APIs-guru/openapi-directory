package shared

type CommonFeatureSpec struct {
	Anthosobservability *AnthosObservabilityFeatureSpec `json:"anthosobservability"`
	Appdevexperience    map[string]interface{}          `json:"appdevexperience"`
	Multiclusteringress *MultiClusterIngressFeatureSpec `json:"multiclusteringress"`
}
