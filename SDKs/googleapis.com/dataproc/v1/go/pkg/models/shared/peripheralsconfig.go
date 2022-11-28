package shared

// PeripheralsConfig
// Auxiliary services configuration for a workload.
type PeripheralsConfig struct {
	MetastoreService         *string                   `json:"metastoreService,omitempty"`
	SparkHistoryServerConfig *SparkHistoryServerConfig `json:"sparkHistoryServerConfig,omitempty"`
}
