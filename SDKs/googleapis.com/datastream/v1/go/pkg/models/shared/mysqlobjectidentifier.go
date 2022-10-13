package shared

type MysqlObjectIdentifier struct {
	Database *string `json:"database"`
	Table    *string `json:"table"`
}
