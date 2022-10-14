package shared

type MysqlSourceConfig struct {
	Allowlist  *MysqlRdbms `json:"allowlist,omitempty"`
	Rejectlist *MysqlRdbms `json:"rejectlist,omitempty"`
}
