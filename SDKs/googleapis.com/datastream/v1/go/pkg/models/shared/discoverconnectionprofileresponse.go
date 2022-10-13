package shared

type DiscoverConnectionProfileResponse struct {
	MysqlRdbms      *MysqlRdbms      `json:"mysqlRdbms"`
	OracleRdbms     *OracleRdbms     `json:"oracleRdbms"`
	PostgresqlRdbms *PostgresqlRdbms `json:"postgresqlRdbms"`
}
