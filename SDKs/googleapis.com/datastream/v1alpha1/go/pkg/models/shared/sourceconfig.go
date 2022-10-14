package shared

type SourceConfig struct {
	MysqlSourceConfig           *MysqlSourceConfig  `json:"mysqlSourceConfig,omitempty"`
	OracleSourceConfig          *OracleSourceConfig `json:"oracleSourceConfig,omitempty"`
	SourceConnectionProfileName *string             `json:"sourceConnectionProfileName,omitempty"`
}
