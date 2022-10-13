package shared

type MysqlSourceConfig struct {
	Allowlist  *MysqlRdbms `json:"allowlist"`
	Rejectlist *MysqlRdbms `json:"rejectlist"`
}
