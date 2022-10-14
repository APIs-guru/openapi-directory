package shared

type PortStateEnum string

const (
	PortStateEnumRequested               PortStateEnum = "requested"
	PortStateEnumAllocated               PortStateEnum = "allocated"
	PortStateEnumTesting                 PortStateEnum = "testing"
	PortStateEnumProduction              PortStateEnum = "production"
	PortStateEnumProductionChangePending PortStateEnum = "production_change_pending"
	PortStateEnumDecommissionRequested   PortStateEnum = "decommission_requested"
	PortStateEnumDecommissioned          PortStateEnum = "decommissioned"
	PortStateEnumArchived                PortStateEnum = "archived"
	PortStateEnumError                   PortStateEnum = "error"
	PortStateEnumOperator                PortStateEnum = "operator"
	PortStateEnumScheduled               PortStateEnum = "scheduled"
)

type Port struct {
	BillingAccount   string        `json:"billing_account"`
	Connection       *string       `json:"connection,omitempty"`
	ConsumingAccount string        `json:"consuming_account"`
	ContractRef      *string       `json:"contract_ref,omitempty"`
	Device           string        `json:"device"`
	ExternalRef      *string       `json:"external_ref,omitempty"`
	ID               string        `json:"id"`
	ManagingAccount  string        `json:"managing_account"`
	MediaType        string        `json:"media_type"`
	Name             *string       `json:"name,omitempty"`
	Pop              string        `json:"pop"`
	PurchaseOrder    *string       `json:"purchase_order,omitempty"`
	RoleAssignments  []string      `json:"role_assignments"`
	Speed            *int64        `json:"speed,omitempty"`
	State            PortStateEnum `json:"state"`
	Status           []Status      `json:"status,omitempty"`
}
