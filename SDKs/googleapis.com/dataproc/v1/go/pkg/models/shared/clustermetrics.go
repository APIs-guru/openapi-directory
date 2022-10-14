package shared

type ClusterMetrics struct {
	HdfsMetrics map[string]string `json:"hdfsMetrics,omitempty"`
	YarnMetrics map[string]string `json:"yarnMetrics,omitempty"`
}
