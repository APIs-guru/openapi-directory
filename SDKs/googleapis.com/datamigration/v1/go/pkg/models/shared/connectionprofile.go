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
	Alloydb     *AlloyDbConnectionProfile      `json:"alloydb"`
	Cloudsql    *CloudSQLConnectionProfile     `json:"cloudsql"`
	CreateTime  *string                        `json:"createTime"`
	DisplayName *string                        `json:"displayName"`
	Error       *Status                        `json:"error"`
	Labels      map[string]string              `json:"labels"`
	Mysql       *MySQLConnectionProfile        `json:"mysql"`
	Name        *string                        `json:"name"`
	Postgresql  *PostgreSQLConnectionProfile   `json:"postgresql"`
	Provider    *ConnectionProfileProviderEnum `json:"provider"`
	State       *ConnectionProfileStateEnum    `json:"state"`
	UpdateTime  *string                        `json:"updateTime"`
}
