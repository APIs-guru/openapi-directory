package shared

type PeripheralsConfig struct {
	MetastoreService         *string                   `json:"metastoreService,omitempty"`
	SparkHistoryServerConfig *SparkHistoryServerConfig `json:"sparkHistoryServerConfig,omitempty"`
}
