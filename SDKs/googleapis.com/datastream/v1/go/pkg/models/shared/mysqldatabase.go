package shared

type MysqlDatabase struct {
	Database    *string      `json:"database"`
	MysqlTables []MysqlTable `json:"mysqlTables"`
}
