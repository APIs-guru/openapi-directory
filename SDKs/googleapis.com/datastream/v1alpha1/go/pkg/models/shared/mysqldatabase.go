package shared

// MysqlDatabase
// MySQL database.
type MysqlDatabase struct {
	DatabaseName *string      `json:"databaseName,omitempty"`
	MysqlTables  []MysqlTable `json:"mysqlTables,omitempty"`
}
