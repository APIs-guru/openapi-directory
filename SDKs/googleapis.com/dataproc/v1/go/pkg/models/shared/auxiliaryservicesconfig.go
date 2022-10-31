package shared



type AuxiliaryServicesConfig struct {
    MetastoreConfig *MetastoreConfig `json:"metastoreConfig,omitempty"`
    SparkHistoryServerConfig *SparkHistoryServerConfig `json:"sparkHistoryServerConfig,omitempty"`
    
}

