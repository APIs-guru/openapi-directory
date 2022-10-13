package shared

type BackfillAllStrategy struct {
	MysqlExcludedObjects      *MysqlRdbms      `json:"mysqlExcludedObjects"`
	OracleExcludedObjects     *OracleRdbms     `json:"oracleExcludedObjects"`
	PostgresqlExcludedObjects *PostgresqlRdbms `json:"postgresqlExcludedObjects"`
}
