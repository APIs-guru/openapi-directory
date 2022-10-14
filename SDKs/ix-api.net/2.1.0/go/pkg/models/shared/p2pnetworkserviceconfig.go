package shared

import (
	"time"
)

type P2PNetworkServiceConfigStateEnum string

const (
	P2PNetworkServiceConfigStateEnumRequested               P2PNetworkServiceConfigStateEnum = "requested"
	P2PNetworkServiceConfigStateEnumAllocated               P2PNetworkServiceConfigStateEnum = "allocated"
	P2PNetworkServiceConfigStateEnumTesting                 P2PNetworkServiceConfigStateEnum = "testing"
	P2PNetworkServiceConfigStateEnumProduction              P2PNetworkServiceConfigStateEnum = "production"
	P2PNetworkServiceConfigStateEnumProductionChangePending P2PNetworkServiceConfigStateEnum = "production_change_pending"
	P2PNetworkServiceConfigStateEnumDecommissionRequested   P2PNetworkServiceConfigStateEnum = "decommission_requested"
	P2PNetworkServiceConfigStateEnumDecommissioned          P2PNetworkServiceConfigStateEnum = "decommissioned"
	P2PNetworkServiceConfigStateEnumArchived                P2PNetworkServiceConfigStateEnum = "archived"
	P2PNetworkServiceConfigStateEnumError                   P2PNetworkServiceConfigStateEnum = "error"
	P2PNetworkServiceConfigStateEnumOperator                P2PNetworkServiceConfigStateEnum = "operator"
	P2PNetworkServiceConfigStateEnumScheduled               P2PNetworkServiceConfigStateEnum = "scheduled"
)

type P2PNetworkServiceConfig struct {
	BillingAccount        string                           `json:"billing_account"`
	Capacity              *int64                           `json:"capacity,omitempty"`
	ChargedUntil          *time.Time                       `json:"charged_until,omitempty"`
	Connection            string                           `json:"connection"`
	ConsumingAccount      string                           `json:"consuming_account"`
	ContractRef           *string                          `json:"contract_ref,omitempty"`
	DecommissionAt        *time.Time                       `json:"decommission_at,omitempty"`
	ExternalRef           *string                          `json:"external_ref,omitempty"`
	ID                    string                           `json:"id"`
	ManagingAccount       string                           `json:"managing_account"`
	NetworkFeatureConfigs []string                         `json:"network_feature_configs,omitempty"`
	NetworkService        string                           `json:"network_service"`
	PurchaseOrder         *string                          `json:"purchase_order,omitempty"`
	RoleAssignments       []string                         `json:"role_assignments"`
	State                 P2PNetworkServiceConfigStateEnum `json:"state"`
	Status                []Status                         `json:"status,omitempty"`
	Type                  string                           `json:"type"`
	VlanConfig            interface{}                      `json:"vlan_config"`
}
