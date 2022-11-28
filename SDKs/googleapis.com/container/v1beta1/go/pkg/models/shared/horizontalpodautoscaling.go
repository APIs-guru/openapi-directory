package shared

// HorizontalPodAutoscaling
// Configuration options for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods.
type HorizontalPodAutoscaling struct {
	Disabled *bool `json:"disabled,omitempty"`
}
