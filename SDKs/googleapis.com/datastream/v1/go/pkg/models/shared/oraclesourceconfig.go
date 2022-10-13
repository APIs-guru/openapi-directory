package shared

type OracleSourceConfig struct {
	DropLargeObjects      map[string]interface{} `json:"dropLargeObjects"`
	ExcludeObjects        *OracleRdbms           `json:"excludeObjects"`
	IncludeObjects        *OracleRdbms           `json:"includeObjects"`
	MaxConcurrentCdcTasks *int32                 `json:"maxConcurrentCdcTasks"`
	StreamLargeObjects    map[string]interface{} `json:"streamLargeObjects"`
}
