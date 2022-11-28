package shared

// DiscoverConnectionProfileRequestInput
// Request message for 'discover' ConnectionProfile request.
type DiscoverConnectionProfileRequestInput struct {
	ConnectionProfile     *ConnectionProfileInput `json:"connectionProfile,omitempty"`
	ConnectionProfileName *string                 `json:"connectionProfileName,omitempty"`
	MysqlRdbms            *MysqlRdbms             `json:"mysqlRdbms,omitempty"`
	OracleRdbms           *OracleRdbms            `json:"oracleRdbms,omitempty"`
	RecursionDepth        *int32                  `json:"recursionDepth,omitempty"`
	Recursive             *bool                   `json:"recursive,omitempty"`
}
