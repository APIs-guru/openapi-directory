package shared

type AuxiliaryServicesConfig struct {
	MetastoreConfig          *MetastoreConfig          `json:"metastoreConfig"`
	SparkHistoryServerConfig *SparkHistoryServerConfig `json:"sparkHistoryServerConfig"`
}
