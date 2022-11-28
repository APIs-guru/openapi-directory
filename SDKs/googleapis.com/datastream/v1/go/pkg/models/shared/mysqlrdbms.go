package shared

// MysqlRdbms
// MySQL database structure
type MysqlRdbms struct {
	MysqlDatabases []MysqlDatabase `json:"mysqlDatabases,omitempty"`
}
