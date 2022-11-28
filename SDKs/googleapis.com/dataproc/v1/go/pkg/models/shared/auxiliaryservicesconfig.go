package shared

// AuxiliaryServicesConfig
// Auxiliary services configuration for a Cluster.
type AuxiliaryServicesConfig struct {
	MetastoreConfig          *MetastoreConfig          `json:"metastoreConfig,omitempty"`
	SparkHistoryServerConfig *SparkHistoryServerConfig `json:"sparkHistoryServerConfig,omitempty"`
}
