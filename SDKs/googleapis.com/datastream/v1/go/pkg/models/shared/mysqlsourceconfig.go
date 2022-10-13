package shared

type MysqlSourceConfig struct {
	ExcludeObjects        *MysqlRdbms `json:"excludeObjects"`
	IncludeObjects        *MysqlRdbms `json:"includeObjects"`
	MaxConcurrentCdcTasks *int32      `json:"maxConcurrentCdcTasks"`
}
