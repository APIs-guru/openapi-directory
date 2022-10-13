package shared

type MysqlDatabase struct {
	DatabaseName *string      `json:"databaseName"`
	MysqlTables  []MysqlTable `json:"mysqlTables"`
}
