package shared

// AutoscalingLimits
// Limits for the number of nodes a Cluster can autoscale up/down to.
type AutoscalingLimits struct {
	MaxServeNodes *int32 `json:"maxServeNodes,omitempty"`
	MinServeNodes *int32 `json:"minServeNodes,omitempty"`
}
