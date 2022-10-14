package shared

type ConnectionProfileProviderEnum string

const (
	ConnectionProfileProviderEnumDatabaseProviderUnspecified ConnectionProfileProviderEnum = "DATABASE_PROVIDER_UNSPECIFIED"
	ConnectionProfileProviderEnumCloudsql                    ConnectionProfileProviderEnum = "CLOUDSQL"
	ConnectionProfileProviderEnumRds                         ConnectionProfileProviderEnum = "RDS"
	ConnectionProfileProviderEnumAurora                      ConnectionProfileProviderEnum = "AURORA"
	ConnectionProfileProviderEnumAlloydb                     ConnectionProfileProviderEnum = "ALLOYDB"
)

type ConnectionProfileStateEnum string

const (
	ConnectionProfileStateEnumStateUnspecified ConnectionProfileStateEnum = "STATE_UNSPECIFIED"
	ConnectionProfileStateEnumDraft            ConnectionProfileStateEnum = "DRAFT"
	ConnectionProfileStateEnumCreating         ConnectionProfileStateEnum = "CREATING"
	ConnectionProfileStateEnumReady            ConnectionProfileStateEnum = "READY"
	ConnectionProfileStateEnumUpdating         ConnectionProfileStateEnum = "UPDATING"
	ConnectionProfileStateEnumDeleting         ConnectionProfileStateEnum = "DELETING"
	ConnectionProfileStateEnumDeleted          ConnectionProfileStateEnum = "DELETED"
	ConnectionProfileStateEnumFailed           ConnectionProfileStateEnum = "FAILED"
)

type ConnectionProfile struct {
	Alloydb     *AlloyDbConnectionProfile      `json:"alloydb,omitempty"`
	Cloudsql    *CloudSQLConnectionProfile     `json:"cloudsql,omitempty"`
	CreateTime  *string                        `json:"createTime,omitempty"`
	DisplayName *string                        `json:"displayName,omitempty"`
	Error       *Status                        `json:"error,omitempty"`
	Labels      map[string]string              `json:"labels,omitempty"`
	Mysql       *MySQLConnectionProfile        `json:"mysql,omitempty"`
	Name        *string                        `json:"name,omitempty"`
	Postgresql  *PostgreSQLConnectionProfile   `json:"postgresql,omitempty"`
	Provider    *ConnectionProfileProviderEnum `json:"provider,omitempty"`
	State       *ConnectionProfileStateEnum    `json:"state,omitempty"`
	UpdateTime  *string                        `json:"updateTime,omitempty"`
}
