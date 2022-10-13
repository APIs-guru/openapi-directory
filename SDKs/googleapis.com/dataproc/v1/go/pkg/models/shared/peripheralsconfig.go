package shared

type PeripheralsConfig struct {
	MetastoreService         *string                   `json:"metastoreService"`
	SparkHistoryServerConfig *SparkHistoryServerConfig `json:"sparkHistoryServerConfig"`
}
