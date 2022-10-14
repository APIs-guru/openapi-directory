package shared

import (
	"time"
)

type ExchangeLanNetworkServiceConfigStateEnum string

const (
	ExchangeLanNetworkServiceConfigStateEnumRequested               ExchangeLanNetworkServiceConfigStateEnum = "requested"
	ExchangeLanNetworkServiceConfigStateEnumAllocated               ExchangeLanNetworkServiceConfigStateEnum = "allocated"
	ExchangeLanNetworkServiceConfigStateEnumTesting                 ExchangeLanNetworkServiceConfigStateEnum = "testing"
	ExchangeLanNetworkServiceConfigStateEnumProduction              ExchangeLanNetworkServiceConfigStateEnum = "production"
	ExchangeLanNetworkServiceConfigStateEnumProductionChangePending ExchangeLanNetworkServiceConfigStateEnum = "production_change_pending"
	ExchangeLanNetworkServiceConfigStateEnumDecommissionRequested   ExchangeLanNetworkServiceConfigStateEnum = "decommission_requested"
	ExchangeLanNetworkServiceConfigStateEnumDecommissioned          ExchangeLanNetworkServiceConfigStateEnum = "decommissioned"
	ExchangeLanNetworkServiceConfigStateEnumArchived                ExchangeLanNetworkServiceConfigStateEnum = "archived"
	ExchangeLanNetworkServiceConfigStateEnumError                   ExchangeLanNetworkServiceConfigStateEnum = "error"
	ExchangeLanNetworkServiceConfigStateEnumOperator                ExchangeLanNetworkServiceConfigStateEnum = "operator"
	ExchangeLanNetworkServiceConfigStateEnumScheduled               ExchangeLanNetworkServiceConfigStateEnum = "scheduled"
)

type ExchangeLanNetworkServiceConfig struct {
	Asns                  []int64                                  `json:"asns"`
	BillingAccount        string                                   `json:"billing_account"`
	Capacity              *int64                                   `json:"capacity,omitempty"`
	ChargedUntil          *time.Time                               `json:"charged_until,omitempty"`
	Connection            string                                   `json:"connection"`
	ConsumingAccount      string                                   `json:"consuming_account"`
	ContractRef           *string                                  `json:"contract_ref,omitempty"`
	DecommissionAt        *time.Time                               `json:"decommission_at,omitempty"`
	ExternalRef           *string                                  `json:"external_ref,omitempty"`
	ID                    string                                   `json:"id"`
	Ips                   []string                                 `json:"ips,omitempty"`
	Listed                bool                                     `json:"listed"`
	Macs                  []string                                 `json:"macs,omitempty"`
	ManagingAccount       string                                   `json:"managing_account"`
	NetworkFeatureConfigs []string                                 `json:"network_feature_configs,omitempty"`
	NetworkService        string                                   `json:"network_service"`
	ProductOffering       string                                   `json:"product_offering"`
	PurchaseOrder         *string                                  `json:"purchase_order,omitempty"`
	RoleAssignments       []string                                 `json:"role_assignments"`
	State                 ExchangeLanNetworkServiceConfigStateEnum `json:"state"`
	Status                []Status                                 `json:"status,omitempty"`
	Type                  string                                   `json:"type"`
	VlanConfig            interface{}                              `json:"vlan_config"`
}
