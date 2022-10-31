package shared

type SQLIntegrationStateEnum string

const (
	SQLIntegrationStateEnumStateUnspecified SQLIntegrationStateEnum = "STATE_UNSPECIFIED"
	SQLIntegrationStateEnumCreating         SQLIntegrationStateEnum = "CREATING"
	SQLIntegrationStateEnumDeleting         SQLIntegrationStateEnum = "DELETING"
	SQLIntegrationStateEnumReady            SQLIntegrationStateEnum = "READY"
)

type SQLIntegration struct {
	CreateTime  *string                  `json:"createTime,omitempty"`
	Name        *string                  `json:"name,omitempty"`
	SQLInstance *string                  `json:"sqlInstance,omitempty"`
	State       *SQLIntegrationStateEnum `json:"state,omitempty"`
	UpdateTime  *string                  `json:"updateTime,omitempty"`
}
