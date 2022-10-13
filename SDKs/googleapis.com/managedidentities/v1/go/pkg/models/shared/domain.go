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
	DomainStateEnumUnavailable           DomainStateEnum = "UNAVAILABLE"
)

type Domain struct {
	Admin              *string           `json:"admin"`
	AuditLogsEnabled   *bool             `json:"auditLogsEnabled"`
	AuthorizedNetworks []string          `json:"authorizedNetworks"`
	CreateTime         *string           `json:"createTime"`
	Fqdn               *string           `json:"fqdn"`
	Labels             map[string]string `json:"labels"`
	Locations          []string          `json:"locations"`
	Name               *string           `json:"name"`
	ReservedIPRange    *string           `json:"reservedIpRange"`
	State              *DomainStateEnum  `json:"state"`
	StatusMessage      *string           `json:"statusMessage"`
	Trusts             []Trust           `json:"trusts"`
	UpdateTime         *string           `json:"updateTime"`
}
