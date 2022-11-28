package shared

// MysqlSourceConfig
// MySQL source configuration
type MysqlSourceConfig struct {
	ExcludeObjects        *MysqlRdbms `json:"excludeObjects,omitempty"`
	IncludeObjects        *MysqlRdbms `json:"includeObjects,omitempty"`
	MaxConcurrentCdcTasks *int32      `json:"maxConcurrentCdcTasks,omitempty"`
}
