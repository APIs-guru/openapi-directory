package shared

type DiscoverConnectionProfileRequest struct {
	ConnectionProfile     *ConnectionProfile `json:"connectionProfile,omitempty"`
	ConnectionProfileName *string            `json:"connectionProfileName,omitempty"`
	MysqlRdbms            *MysqlRdbms        `json:"mysqlRdbms,omitempty"`
	OracleRdbms           *OracleRdbms       `json:"oracleRdbms,omitempty"`
	RecursionDepth        *int32             `json:"recursionDepth,omitempty"`
	Recursive             *bool              `json:"recursive,omitempty"`
}
