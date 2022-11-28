package shared

// BackfillAllStrategy
// Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
type BackfillAllStrategy struct {
	MysqlExcludedObjects      *MysqlRdbms      `json:"mysqlExcludedObjects,omitempty"`
	OracleExcludedObjects     *OracleRdbms     `json:"oracleExcludedObjects,omitempty"`
	PostgresqlExcludedObjects *PostgresqlRdbms `json:"postgresqlExcludedObjects,omitempty"`
}
