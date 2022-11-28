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

// Domain
// Represents a managed Microsoft Active Directory domain. If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
type Domain struct {
	Admin              *string           `json:"admin,omitempty"`
	AuditLogsEnabled   *bool             `json:"auditLogsEnabled,omitempty"`
	AuthorizedNetworks []string          `json:"authorizedNetworks,omitempty"`
	CreateTime         *string           `json:"createTime,omitempty"`
	Fqdn               *string           `json:"fqdn,omitempty"`
	Labels             map[string]string `json:"labels,omitempty"`
	Locations          []string          `json:"locations,omitempty"`
	Name               *string           `json:"name,omitempty"`
	ReservedIPRange    *string           `json:"reservedIpRange,omitempty"`
	State              *DomainStateEnum  `json:"state,omitempty"`
	StatusMessage      *string           `json:"statusMessage,omitempty"`
	Trusts             []Trust           `json:"trusts,omitempty"`
	UpdateTime         *string           `json:"updateTime,omitempty"`
}

// DomainInput
// Represents a managed Microsoft Active Directory domain. If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
type DomainInput struct {
	Admin              *string           `json:"admin,omitempty"`
	AuditLogsEnabled   *bool             `json:"auditLogsEnabled,omitempty"`
	AuthorizedNetworks []string          `json:"authorizedNetworks,omitempty"`
	Labels             map[string]string `json:"labels,omitempty"`
	Locations          []string          `json:"locations,omitempty"`
	ReservedIPRange    *string           `json:"reservedIpRange,omitempty"`
}
