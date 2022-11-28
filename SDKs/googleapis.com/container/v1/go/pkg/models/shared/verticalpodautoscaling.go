package shared

// VerticalPodAutoscaling
// VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it.
type VerticalPodAutoscaling struct {
	Enabled *bool `json:"enabled,omitempty"`
}
