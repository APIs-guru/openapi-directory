package shared

type SourceConfig struct {
	MysqlSourceConfig           *MysqlSourceConfig  `json:"mysqlSourceConfig"`
	OracleSourceConfig          *OracleSourceConfig `json:"oracleSourceConfig"`
	SourceConnectionProfileName *string             `json:"sourceConnectionProfileName"`
}
