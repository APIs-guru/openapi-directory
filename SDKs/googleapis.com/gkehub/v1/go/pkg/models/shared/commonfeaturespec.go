package shared

// CommonFeatureSpec
// CommonFeatureSpec contains Hub-wide configuration information
type CommonFeatureSpec struct {
	Appdevexperience    map[string]interface{}          `json:"appdevexperience,omitempty"`
	Fleetobservability  map[string]interface{}          `json:"fleetobservability,omitempty"`
	Multiclusteringress *MultiClusterIngressFeatureSpec `json:"multiclusteringress,omitempty"`
}
