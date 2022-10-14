package shared

type MysqlDatabase struct {
	DatabaseName *string      `json:"databaseName,omitempty"`
	MysqlTables  []MysqlTable `json:"mysqlTables,omitempty"`
}
