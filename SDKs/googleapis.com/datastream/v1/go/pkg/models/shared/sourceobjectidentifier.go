package shared

// SourceObjectIdentifier
// Represents an identifier of an object in the data source.
type SourceObjectIdentifier struct {
	MysqlIdentifier      *MysqlObjectIdentifier      `json:"mysqlIdentifier,omitempty"`
	OracleIdentifier     *OracleObjectIdentifier     `json:"oracleIdentifier,omitempty"`
	PostgresqlIdentifier *PostgresqlObjectIdentifier `json:"postgresqlIdentifier,omitempty"`
}
