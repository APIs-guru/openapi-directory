package shared

type SourceObjectIdentifier struct {
	MysqlIdentifier      *MysqlObjectIdentifier      `json:"mysqlIdentifier"`
	OracleIdentifier     *OracleObjectIdentifier     `json:"oracleIdentifier"`
	PostgresqlIdentifier *PostgresqlObjectIdentifier `json:"postgresqlIdentifier"`
}
