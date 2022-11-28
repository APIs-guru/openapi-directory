package shared

// ClusterMetrics
// Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
type ClusterMetrics struct {
	HdfsMetrics map[string]string `json:"hdfsMetrics,omitempty"`
	YarnMetrics map[string]string `json:"yarnMetrics,omitempty"`
}
