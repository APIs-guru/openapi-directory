package shared

type OracleSourceConfig struct {
	Allowlist        *OracleRdbms           `json:"allowlist"`
	DropLargeObjects map[string]interface{} `json:"dropLargeObjects"`
	Rejectlist       *OracleRdbms           `json:"rejectlist"`
}
