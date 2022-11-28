package shared

// MysqlDatabase
// MySQL database.
type MysqlDatabase struct {
	Database    *string      `json:"database,omitempty"`
	MysqlTables []MysqlTable `json:"mysqlTables,omitempty"`
}
