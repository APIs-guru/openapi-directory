package shared

type MysqlTable struct {
	MysqlColumns []MysqlColumn `json:"mysqlColumns"`
	Table        *string       `json:"table"`
}
