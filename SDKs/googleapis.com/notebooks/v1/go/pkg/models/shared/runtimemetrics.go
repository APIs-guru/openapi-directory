package shared

// RuntimeMetrics
// Contains runtime daemon metrics, such as OS and kernels and sessions stats.
type RuntimeMetrics struct {
	SystemMetrics map[string]string `json:"systemMetrics,omitempty"`
}
