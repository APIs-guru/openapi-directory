package shared

type SourceObjectIdentifier struct {
	MysqlIdentifier      *MysqlObjectIdentifier      `json:"mysqlIdentifier,omitempty"`
	OracleIdentifier     *OracleObjectIdentifier     `json:"oracleIdentifier,omitempty"`
	PostgresqlIdentifier *PostgresqlObjectIdentifier `json:"postgresqlIdentifier,omitempty"`
}
