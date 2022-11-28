package shared

// MultiClusterIngressFeatureSpec
// **Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature.
type MultiClusterIngressFeatureSpec struct {
	ConfigMembership *string `json:"configMembership,omitempty"`
}
