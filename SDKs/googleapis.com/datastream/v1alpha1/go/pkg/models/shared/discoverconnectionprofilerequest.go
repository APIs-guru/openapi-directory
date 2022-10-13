package shared

type DiscoverConnectionProfileRequest struct {
	ConnectionProfile     *ConnectionProfile `json:"connectionProfile"`
	ConnectionProfileName *string            `json:"connectionProfileName"`
	MysqlRdbms            *MysqlRdbms        `json:"mysqlRdbms"`
	OracleRdbms           *OracleRdbms       `json:"oracleRdbms"`
	RecursionDepth        *int32             `json:"recursionDepth"`
	Recursive             *bool              `json:"recursive"`
}
