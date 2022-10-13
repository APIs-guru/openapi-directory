package shared

type CommonFeatureSpec struct {
	Appdevexperience    map[string]interface{}          `json:"appdevexperience"`
	Multiclusteringress *MultiClusterIngressFeatureSpec `json:"multiclusteringress"`
}
