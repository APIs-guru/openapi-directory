package shared

type LogConfig struct {
	CloudAudit *CloudAuditOptions `json:"cloudAudit,omitempty"`
	Counter    *CounterOptions    `json:"counter,omitempty"`
	DataAccess *DataAccessOptions `json:"dataAccess,omitempty"`
}
