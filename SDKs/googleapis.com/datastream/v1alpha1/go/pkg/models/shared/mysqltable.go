package shared

type MysqlTable struct {
	MysqlColumns []MysqlColumn `json:"mysqlColumns,omitempty"`
	TableName    *string       `json:"tableName,omitempty"`
}
