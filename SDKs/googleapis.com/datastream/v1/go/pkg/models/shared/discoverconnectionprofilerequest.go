package shared

type DiscoverConnectionProfileRequest struct {
	ConnectionProfile     *ConnectionProfile `json:"connectionProfile"`
	ConnectionProfileName *string            `json:"connectionProfileName"`
	FullHierarchy         *bool              `json:"fullHierarchy"`
	HierarchyDepth        *int32             `json:"hierarchyDepth"`
	MysqlRdbms            *MysqlRdbms        `json:"mysqlRdbms"`
	OracleRdbms           *OracleRdbms       `json:"oracleRdbms"`
	PostgresqlRdbms       *PostgresqlRdbms   `json:"postgresqlRdbms"`
}
