package shared

type MysqlDatabase struct {
	Database    *string      `json:"database,omitempty"`
	MysqlTables []MysqlTable `json:"mysqlTables,omitempty"`
}
