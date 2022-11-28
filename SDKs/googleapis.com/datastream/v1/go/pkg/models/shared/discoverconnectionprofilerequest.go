package shared

// DiscoverConnectionProfileRequestInput
// Request message for 'discover' ConnectionProfile request.
type DiscoverConnectionProfileRequestInput struct {
	ConnectionProfile     *ConnectionProfileInput `json:"connectionProfile,omitempty"`
	ConnectionProfileName *string                 `json:"connectionProfileName,omitempty"`
	FullHierarchy         *bool                   `json:"fullHierarchy,omitempty"`
	HierarchyDepth        *int32                  `json:"hierarchyDepth,omitempty"`
	MysqlRdbms            *MysqlRdbms             `json:"mysqlRdbms,omitempty"`
	OracleRdbms           *OracleRdbms            `json:"oracleRdbms,omitempty"`
	PostgresqlRdbms       *PostgresqlRdbms        `json:"postgresqlRdbms,omitempty"`
}
