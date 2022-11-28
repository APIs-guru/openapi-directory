package shared

// CommonFeatureSpec
// CommonFeatureSpec contains Hub-wide configuration information
type CommonFeatureSpec struct {
	Anthosobservability *AnthosObservabilityFeatureSpec `json:"anthosobservability,omitempty"`
	Appdevexperience    map[string]interface{}          `json:"appdevexperience,omitempty"`
	Fleetobservability  map[string]interface{}          `json:"fleetobservability,omitempty"`
	Multiclusteringress *MultiClusterIngressFeatureSpec `json:"multiclusteringress,omitempty"`
}
