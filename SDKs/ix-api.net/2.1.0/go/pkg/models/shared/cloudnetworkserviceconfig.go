package shared

import (
	"time"
)

type CloudNetworkServiceConfigStateEnum string

const (
	CloudNetworkServiceConfigStateEnumRequested               CloudNetworkServiceConfigStateEnum = "requested"
	CloudNetworkServiceConfigStateEnumAllocated               CloudNetworkServiceConfigStateEnum = "allocated"
	CloudNetworkServiceConfigStateEnumTesting                 CloudNetworkServiceConfigStateEnum = "testing"
	CloudNetworkServiceConfigStateEnumProduction              CloudNetworkServiceConfigStateEnum = "production"
	CloudNetworkServiceConfigStateEnumProductionChangePending CloudNetworkServiceConfigStateEnum = "production_change_pending"
	CloudNetworkServiceConfigStateEnumDecommissionRequested   CloudNetworkServiceConfigStateEnum = "decommission_requested"
	CloudNetworkServiceConfigStateEnumDecommissioned          CloudNetworkServiceConfigStateEnum = "decommissioned"
	CloudNetworkServiceConfigStateEnumArchived                CloudNetworkServiceConfigStateEnum = "archived"
	CloudNetworkServiceConfigStateEnumError                   CloudNetworkServiceConfigStateEnum = "error"
	CloudNetworkServiceConfigStateEnumOperator                CloudNetworkServiceConfigStateEnum = "operator"
	CloudNetworkServiceConfigStateEnumScheduled               CloudNetworkServiceConfigStateEnum = "scheduled"
)

type CloudNetworkServiceConfig struct {
	BillingAccount        string                             `json:"billing_account"`
	ChargedUntil          *time.Time                         `json:"charged_until,omitempty"`
	CloudVlan             int32                              `json:"cloud_vlan"`
	Connection            string                             `json:"connection"`
	ConsumingAccount      string                             `json:"consuming_account"`
	ContractRef           *string                            `json:"contract_ref,omitempty"`
	DecommissionAt        *time.Time                         `json:"decommission_at,omitempty"`
	ExternalRef           *string                            `json:"external_ref,omitempty"`
	Handover              int64                              `json:"handover"`
	ID                    string                             `json:"id"`
	ManagingAccount       string                             `json:"managing_account"`
	NetworkFeatureConfigs []string                           `json:"network_feature_configs,omitempty"`
	NetworkService        string                             `json:"network_service"`
	PurchaseOrder         *string                            `json:"purchase_order,omitempty"`
	RoleAssignments       []string                           `json:"role_assignments"`
	State                 CloudNetworkServiceConfigStateEnum `json:"state"`
	Status                []Status                           `json:"status,omitempty"`
	Type                  string                             `json:"type"`
	VlanConfig            interface{}                        `json:"vlan_config"`
}
