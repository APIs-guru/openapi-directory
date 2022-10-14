package shared

type MysqlRdbms struct {
	MysqlDatabases []MysqlDatabase `json:"mysqlDatabases,omitempty"`
}
