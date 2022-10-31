package shared

type OracleSourceConfig struct {
	DropLargeObjects      map[string]interface{} `json:"dropLargeObjects,omitempty"`
	ExcludeObjects        *OracleRdbms           `json:"excludeObjects,omitempty"`
	IncludeObjects        *OracleRdbms           `json:"includeObjects,omitempty"`
	MaxConcurrentCdcTasks *int32                 `json:"maxConcurrentCdcTasks,omitempty"`
	StreamLargeObjects    map[string]interface{} `json:"streamLargeObjects,omitempty"`
}
