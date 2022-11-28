package shared

// DiscoverConnectionProfileResponse
// Response from a discover request.
type DiscoverConnectionProfileResponse struct {
	MysqlRdbms      *MysqlRdbms      `json:"mysqlRdbms,omitempty"`
	OracleRdbms     *OracleRdbms     `json:"oracleRdbms,omitempty"`
	PostgresqlRdbms *PostgresqlRdbms `json:"postgresqlRdbms,omitempty"`
}
