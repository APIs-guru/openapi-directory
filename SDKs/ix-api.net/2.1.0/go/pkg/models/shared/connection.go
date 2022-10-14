package shared

type ConnectionLacpTimeoutEnum string

const (
	ConnectionLacpTimeoutEnumSlow ConnectionLacpTimeoutEnum = "slow"
	ConnectionLacpTimeoutEnumFast ConnectionLacpTimeoutEnum = "fast"
)

type ConnectionModeEnum string

const (
	ConnectionModeEnumLagLacp      ConnectionModeEnum = "lag_lacp"
	ConnectionModeEnumLagStatic    ConnectionModeEnum = "lag_static"
	ConnectionModeEnumFlexEthernet ConnectionModeEnum = "flex_ethernet"
	ConnectionModeEnumStandalone   ConnectionModeEnum = "standalone"
)

type ConnectionOuterVlanEthertypesEnum string

const (
	ConnectionOuterVlanEthertypesEnumZerox8100 ConnectionOuterVlanEthertypesEnum = "0x8100"
	ConnectionOuterVlanEthertypesEnumZerox88a8 ConnectionOuterVlanEthertypesEnum = "0x88a8"
	ConnectionOuterVlanEthertypesEnumZerox9100 ConnectionOuterVlanEthertypesEnum = "0x9100"
)

type ConnectionStateEnum string

const (
	ConnectionStateEnumRequested               ConnectionStateEnum = "requested"
	ConnectionStateEnumAllocated               ConnectionStateEnum = "allocated"
	ConnectionStateEnumTesting                 ConnectionStateEnum = "testing"
	ConnectionStateEnumProduction              ConnectionStateEnum = "production"
	ConnectionStateEnumProductionChangePending ConnectionStateEnum = "production_change_pending"
	ConnectionStateEnumDecommissionRequested   ConnectionStateEnum = "decommission_requested"
	ConnectionStateEnumDecommissioned          ConnectionStateEnum = "decommissioned"
	ConnectionStateEnumArchived                ConnectionStateEnum = "archived"
	ConnectionStateEnumError                   ConnectionStateEnum = "error"
	ConnectionStateEnumOperator                ConnectionStateEnum = "operator"
	ConnectionStateEnumScheduled               ConnectionStateEnum = "scheduled"
)

type ConnectionVlanTypesEnum string

const (
	ConnectionVlanTypesEnumPort  ConnectionVlanTypesEnum = "port"
	ConnectionVlanTypesEnumDot1q ConnectionVlanTypesEnum = "dot1q"
	ConnectionVlanTypesEnumQinq  ConnectionVlanTypesEnum = "qinq"
)

type Connection struct {
	BillingAccount      string                              `json:"billing_account"`
	ConsumingAccount    string                              `json:"consuming_account"`
	ContractRef         *string                             `json:"contract_ref,omitempty"`
	ExternalRef         *string                             `json:"external_ref,omitempty"`
	ID                  string                              `json:"id"`
	LacpTimeout         *ConnectionLacpTimeoutEnum          `json:"lacp_timeout,omitempty"`
	ManagingAccount     string                              `json:"managing_account"`
	Mode                ConnectionModeEnum                  `json:"mode"`
	Name                string                              `json:"name"`
	OuterVlanEthertypes []ConnectionOuterVlanEthertypesEnum `json:"outer_vlan_ethertypes"`
	Ports               []string                            `json:"ports,omitempty"`
	PurchaseOrder       *string                             `json:"purchase_order,omitempty"`
	RoleAssignments     []string                            `json:"role_assignments"`
	Speed               *int64                              `json:"speed,omitempty"`
	State               ConnectionStateEnum                 `json:"state"`
	Status              []Status                            `json:"status,omitempty"`
	VlanTypes           []ConnectionVlanTypesEnum           `json:"vlan_types"`
}
