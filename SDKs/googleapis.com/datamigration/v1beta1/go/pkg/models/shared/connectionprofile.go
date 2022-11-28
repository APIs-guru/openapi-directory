package shared

type ConnectionProfileProviderEnum string

const (
	ConnectionProfileProviderEnumDatabaseProviderUnspecified ConnectionProfileProviderEnum = "DATABASE_PROVIDER_UNSPECIFIED"
	ConnectionProfileProviderEnumCloudsql                    ConnectionProfileProviderEnum = "CLOUDSQL"
	ConnectionProfileProviderEnumRds                         ConnectionProfileProviderEnum = "RDS"
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

// ConnectionProfileInput
// A connection profile definition.
type ConnectionProfileInput struct {
	Cloudsql    *CloudSQLConnectionProfileInput `json:"cloudsql,omitempty"`
	DisplayName *string                         `json:"displayName,omitempty"`
	Error       *Status                         `json:"error,omitempty"`
	Labels      map[string]string               `json:"labels,omitempty"`
	Mysql       *MySQLConnectionProfileInput    `json:"mysql,omitempty"`
	Name        *string                         `json:"name,omitempty"`
	Provider    *ConnectionProfileProviderEnum  `json:"provider,omitempty"`
	State       *ConnectionProfileStateEnum     `json:"state,omitempty"`
}

// ConnectionProfile
// A connection profile definition.
type ConnectionProfile struct {
	Cloudsql    *CloudSQLConnectionProfile     `json:"cloudsql,omitempty"`
	CreateTime  *string                        `json:"createTime,omitempty"`
	DisplayName *string                        `json:"displayName,omitempty"`
	Error       *Status                        `json:"error,omitempty"`
	Labels      map[string]string              `json:"labels,omitempty"`
	Mysql       *MySQLConnectionProfile        `json:"mysql,omitempty"`
	Name        *string                        `json:"name,omitempty"`
	Provider    *ConnectionProfileProviderEnum `json:"provider,omitempty"`
	State       *ConnectionProfileStateEnum    `json:"state,omitempty"`
	UpdateTime  *string                        `json:"updateTime,omitempty"`
}
