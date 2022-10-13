package shared

type ClusterMetrics struct {
	HdfsMetrics map[string]string `json:"hdfsMetrics"`
	YarnMetrics map[string]string `json:"yarnMetrics"`
}
