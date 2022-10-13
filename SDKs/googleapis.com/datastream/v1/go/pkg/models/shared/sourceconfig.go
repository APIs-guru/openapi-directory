package shared

type SourceConfig struct {
	MysqlSourceConfig       *MysqlSourceConfig      `json:"mysqlSourceConfig"`
	OracleSourceConfig      *OracleSourceConfig     `json:"oracleSourceConfig"`
	PostgresqlSourceConfig  *PostgresqlSourceConfig `json:"postgresqlSourceConfig"`
	SourceConnectionProfile *string                 `json:"sourceConnectionProfile"`
}
