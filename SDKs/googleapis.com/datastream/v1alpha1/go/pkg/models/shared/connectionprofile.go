package shared

type ConnectionProfile struct {
	CreateTime                  *string                       `json:"createTime"`
	DisplayName                 *string                       `json:"displayName"`
	ForwardSSHConnectivity      *ForwardSSHTunnelConnectivity `json:"forwardSshConnectivity"`
	GcsProfile                  *GcsProfile                   `json:"gcsProfile"`
	Labels                      map[string]string             `json:"labels"`
	MysqlProfile                *MysqlProfile                 `json:"mysqlProfile"`
	Name                        *string                       `json:"name"`
	NoConnectivity              map[string]interface{}        `json:"noConnectivity"`
	OracleProfile               *OracleProfile                `json:"oracleProfile"`
	PrivateConnectivity         *PrivateConnectivity          `json:"privateConnectivity"`
	StaticServiceIPConnectivity map[string]interface{}        `json:"staticServiceIpConnectivity"`
	UpdateTime                  *string                       `json:"updateTime"`
}
