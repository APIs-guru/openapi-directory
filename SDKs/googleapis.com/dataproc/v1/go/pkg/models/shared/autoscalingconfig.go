package shared

// AutoscalingConfig
// Autoscaling Policy config associated with the cluster.
type AutoscalingConfig struct {
	PolicyURI *string `json:"policyUri,omitempty"`
}
