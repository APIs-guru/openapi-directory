package shared

type LogConfig struct {
	CloudAudit *CloudAuditOptions `json:"cloudAudit"`
	Counter    *CounterOptions    `json:"counter"`
	DataAccess *DataAccessOptions `json:"dataAccess"`
}
