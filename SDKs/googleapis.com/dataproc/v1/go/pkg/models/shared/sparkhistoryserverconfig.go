package shared

// SparkHistoryServerConfig
// Spark History Server configuration for the workload.
type SparkHistoryServerConfig struct {
	DataprocCluster *string `json:"dataprocCluster,omitempty"`
}
