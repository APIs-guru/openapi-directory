package shared

type ConnectionProfile struct {
	BigqueryProfile             map[string]interface{}        `json:"bigqueryProfile,omitempty"`
	CreateTime                  *string                       `json:"createTime,omitempty"`
	DisplayName                 *string                       `json:"displayName,omitempty"`
	ForwardSSHConnectivity      *ForwardSSHTunnelConnectivity `json:"forwardSshConnectivity,omitempty"`
	GcsProfile                  *GcsProfile                   `json:"gcsProfile,omitempty"`
	Labels                      map[string]string             `json:"labels,omitempty"`
	MysqlProfile                *MysqlProfile                 `json:"mysqlProfile,omitempty"`
	Name                        *string                       `json:"name,omitempty"`
	OracleProfile               *OracleProfile                `json:"oracleProfile,omitempty"`
	PostgresqlProfile           *PostgresqlProfile            `json:"postgresqlProfile,omitempty"`
	PrivateConnectivity         *PrivateConnectivity          `json:"privateConnectivity,omitempty"`
	StaticServiceIPConnectivity map[string]interface{}        `json:"staticServiceIpConnectivity,omitempty"`
	UpdateTime                  *string                       `json:"updateTime,omitempty"`
}
