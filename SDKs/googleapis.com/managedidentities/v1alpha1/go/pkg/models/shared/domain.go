package shared

type DomainStateEnum string

const (
	DomainStateEnumStateUnspecified      DomainStateEnum = "STATE_UNSPECIFIED"
	DomainStateEnumCreating              DomainStateEnum = "CREATING"
	DomainStateEnumReady                 DomainStateEnum = "READY"
	DomainStateEnumUpdating              DomainStateEnum = "UPDATING"
	DomainStateEnumDeleting              DomainStateEnum = "DELETING"
	DomainStateEnumRepairing             DomainStateEnum = "REPAIRING"
	DomainStateEnumPerformingMaintenance DomainStateEnum = "PERFORMING_MAINTENANCE"
	DomainStateEnumDown                  DomainStateEnum = "DOWN"
)

type Domain struct {
	AuditLogsEnabled           *bool             `json:"auditLogsEnabled"`
	AuthorizedNetworks         []string          `json:"authorizedNetworks"`
	CreateTime                 *string           `json:"createTime"`
	Fqdn                       *string           `json:"fqdn"`
	Labels                     map[string]string `json:"labels"`
	Locations                  []string          `json:"locations"`
	ManagedIdentitiesAdminName *string           `json:"managedIdentitiesAdminName"`
	Name                       *string           `json:"name"`
	ReservedIPRange            *string           `json:"reservedIpRange"`
	State                      *DomainStateEnum  `json:"state"`
	StatusMessage              *string           `json:"statusMessage"`
	Trusts                     []Trust           `json:"trusts"`
	UpdateTime                 *string           `json:"updateTime"`
}
