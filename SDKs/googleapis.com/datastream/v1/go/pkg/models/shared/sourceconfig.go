package shared

type SourceConfig struct {
	MysqlSourceConfig       *MysqlSourceConfig      `json:"mysqlSourceConfig,omitempty"`
	OracleSourceConfig      *OracleSourceConfig     `json:"oracleSourceConfig,omitempty"`
	PostgresqlSourceConfig  *PostgresqlSourceConfig `json:"postgresqlSourceConfig,omitempty"`
	SourceConnectionProfile *string                 `json:"sourceConnectionProfile,omitempty"`
}
