package shared

type ConnectionProfile struct {
	BigqueryProfile             map[string]interface{}        `json:"bigqueryProfile"`
	CreateTime                  *string                       `json:"createTime"`
	DisplayName                 *string                       `json:"displayName"`
	ForwardSSHConnectivity      *ForwardSSHTunnelConnectivity `json:"forwardSshConnectivity"`
	GcsProfile                  *GcsProfile                   `json:"gcsProfile"`
	Labels                      map[string]string             `json:"labels"`
	MysqlProfile                *MysqlProfile                 `json:"mysqlProfile"`
	Name                        *string                       `json:"name"`
	OracleProfile               *OracleProfile                `json:"oracleProfile"`
	PostgresqlProfile           *PostgresqlProfile            `json:"postgresqlProfile"`
	PrivateConnectivity         *PrivateConnectivity          `json:"privateConnectivity"`
	StaticServiceIPConnectivity map[string]interface{}        `json:"staticServiceIpConnectivity"`
	UpdateTime                  *string                       `json:"updateTime"`
}
