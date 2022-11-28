package shared

// MysqlSourceConfig
// MySQL source configuration
type MysqlSourceConfig struct {
	Allowlist  *MysqlRdbms `json:"allowlist,omitempty"`
	Rejectlist *MysqlRdbms `json:"rejectlist,omitempty"`
}
