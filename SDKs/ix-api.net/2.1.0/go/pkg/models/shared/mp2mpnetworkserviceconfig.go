package shared

import (
	"time"
)

type Mp2MpNetworkServiceConfigStateEnum string

const (
	Mp2MpNetworkServiceConfigStateEnumRequested               Mp2MpNetworkServiceConfigStateEnum = "requested"
	Mp2MpNetworkServiceConfigStateEnumAllocated               Mp2MpNetworkServiceConfigStateEnum = "allocated"
	Mp2MpNetworkServiceConfigStateEnumTesting                 Mp2MpNetworkServiceConfigStateEnum = "testing"
	Mp2MpNetworkServiceConfigStateEnumProduction              Mp2MpNetworkServiceConfigStateEnum = "production"
	Mp2MpNetworkServiceConfigStateEnumProductionChangePending Mp2MpNetworkServiceConfigStateEnum = "production_change_pending"
	Mp2MpNetworkServiceConfigStateEnumDecommissionRequested   Mp2MpNetworkServiceConfigStateEnum = "decommission_requested"
	Mp2MpNetworkServiceConfigStateEnumDecommissioned          Mp2MpNetworkServiceConfigStateEnum = "decommissioned"
	Mp2MpNetworkServiceConfigStateEnumArchived                Mp2MpNetworkServiceConfigStateEnum = "archived"
	Mp2MpNetworkServiceConfigStateEnumError                   Mp2MpNetworkServiceConfigStateEnum = "error"
	Mp2MpNetworkServiceConfigStateEnumOperator                Mp2MpNetworkServiceConfigStateEnum = "operator"
	Mp2MpNetworkServiceConfigStateEnumScheduled               Mp2MpNetworkServiceConfigStateEnum = "scheduled"
)

type Mp2MpNetworkServiceConfig struct {
	BillingAccount        string                             `json:"billing_account"`
	Capacity              *int64                             `json:"capacity,omitempty"`
	ChargedUntil          *time.Time                         `json:"charged_until,omitempty"`
	Connection            string                             `json:"connection"`
	ConsumingAccount      string                             `json:"consuming_account"`
	ContractRef           *string                            `json:"contract_ref,omitempty"`
	DecommissionAt        *time.Time                         `json:"decommission_at,omitempty"`
	ExternalRef           *string                            `json:"external_ref,omitempty"`
	ID                    string                             `json:"id"`
	Macs                  []string                           `json:"macs,omitempty"`
	ManagingAccount       string                             `json:"managing_account"`
	NetworkFeatureConfigs []string                           `json:"network_feature_configs,omitempty"`
	NetworkService        string                             `json:"network_service"`
	PurchaseOrder         *string                            `json:"purchase_order,omitempty"`
	RoleAssignments       []string                           `json:"role_assignments"`
	State                 Mp2MpNetworkServiceConfigStateEnum `json:"state"`
	Status                []Status                           `json:"status,omitempty"`
	Type                  string                             `json:"type"`
	VlanConfig            interface{}                        `json:"vlan_config"`
}
