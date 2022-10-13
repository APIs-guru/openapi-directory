package shared

type MysqlTable struct {
	MysqlColumns []MysqlColumn `json:"mysqlColumns"`
	TableName    *string       `json:"tableName"`
}
