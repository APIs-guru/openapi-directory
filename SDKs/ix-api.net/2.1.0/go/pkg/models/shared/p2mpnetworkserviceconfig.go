package shared

import (
	"time"
)

type P2MpNetworkServiceConfigRoleEnum string

const (
	P2MpNetworkServiceConfigRoleEnumRoot P2MpNetworkServiceConfigRoleEnum = "root"
	P2MpNetworkServiceConfigRoleEnumLeaf P2MpNetworkServiceConfigRoleEnum = "leaf"
)

type P2MpNetworkServiceConfigStateEnum string

const (
	P2MpNetworkServiceConfigStateEnumRequested               P2MpNetworkServiceConfigStateEnum = "requested"
	P2MpNetworkServiceConfigStateEnumAllocated               P2MpNetworkServiceConfigStateEnum = "allocated"
	P2MpNetworkServiceConfigStateEnumTesting                 P2MpNetworkServiceConfigStateEnum = "testing"
	P2MpNetworkServiceConfigStateEnumProduction              P2MpNetworkServiceConfigStateEnum = "production"
	P2MpNetworkServiceConfigStateEnumProductionChangePending P2MpNetworkServiceConfigStateEnum = "production_change_pending"
	P2MpNetworkServiceConfigStateEnumDecommissionRequested   P2MpNetworkServiceConfigStateEnum = "decommission_requested"
	P2MpNetworkServiceConfigStateEnumDecommissioned          P2MpNetworkServiceConfigStateEnum = "decommissioned"
	P2MpNetworkServiceConfigStateEnumArchived                P2MpNetworkServiceConfigStateEnum = "archived"
	P2MpNetworkServiceConfigStateEnumError                   P2MpNetworkServiceConfigStateEnum = "error"
	P2MpNetworkServiceConfigStateEnumOperator                P2MpNetworkServiceConfigStateEnum = "operator"
	P2MpNetworkServiceConfigStateEnumScheduled               P2MpNetworkServiceConfigStateEnum = "scheduled"
)

type P2MpNetworkServiceConfig struct {
	BillingAccount        string                            `json:"billing_account"`
	Capacity              *int64                            `json:"capacity"`
	ChargedUntil          *time.Time                        `json:"charged_until"`
	Connection            string                            `json:"connection"`
	ConsumingAccount      string                            `json:"consuming_account"`
	ContractRef           *string                           `json:"contract_ref"`
	DecommissionAt        *time.Time                        `json:"decommission_at"`
	ExternalRef           *string                           `json:"external_ref"`
	ID                    string                            `json:"id"`
	ManagingAccount       string                            `json:"managing_account"`
	NetworkFeatureConfigs []string                          `json:"network_feature_configs"`
	NetworkService        string                            `json:"network_service"`
	PurchaseOrder         *string                           `json:"purchase_order"`
	Role                  *P2MpNetworkServiceConfigRoleEnum `json:"role"`
	RoleAssignments       []string                          `json:"role_assignments"`
	State                 P2MpNetworkServiceConfigStateEnum `json:"state"`
	Status                []Status                          `json:"status"`
	Type                  string                            `json:"type"`
	VlanConfig            interface{}                       `json:"vlan_config"`
}
