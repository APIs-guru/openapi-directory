package shared

// LogConfig
// Specifies what kind of log the caller must write
type LogConfig struct {
	CloudAudit *CloudAuditOptions `json:"cloudAudit,omitempty"`
	Counter    *CounterOptions    `json:"counter,omitempty"`
	DataAccess *DataAccessOptions `json:"dataAccess,omitempty"`
}
