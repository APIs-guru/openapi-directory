package shared

// OracleSourceConfig
// Oracle data source configuration
type OracleSourceConfig struct {
	Allowlist        *OracleRdbms           `json:"allowlist,omitempty"`
	DropLargeObjects map[string]interface{} `json:"dropLargeObjects,omitempty"`
	Rejectlist       *OracleRdbms           `json:"rejectlist,omitempty"`
}
