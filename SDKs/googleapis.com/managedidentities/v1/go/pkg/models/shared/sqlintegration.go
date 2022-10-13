package shared

type SQLIntegrationStateEnum string

const (
	SQLIntegrationStateEnumStateUnspecified SQLIntegrationStateEnum = "STATE_UNSPECIFIED"
	SQLIntegrationStateEnumCreating         SQLIntegrationStateEnum = "CREATING"
	SQLIntegrationStateEnumDeleting         SQLIntegrationStateEnum = "DELETING"
	SQLIntegrationStateEnumReady            SQLIntegrationStateEnum = "READY"
)

type SQLIntegration struct {
	CreateTime  *string                  `json:"createTime"`
	Name        *string                  `json:"name"`
	SQLInstance *string                  `json:"sqlInstance"`
	State       *SQLIntegrationStateEnum `json:"state"`
	UpdateTime  *string                  `json:"updateTime"`
}
