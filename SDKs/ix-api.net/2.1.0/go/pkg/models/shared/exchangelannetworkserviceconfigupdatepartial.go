package shared

type ExchangeLanNetworkServiceConfigUpdatePartial struct {
	Asns                  []int64      `json:"asns,omitempty"`
	BillingAccount        *string      `json:"billing_account,omitempty"`
	Capacity              *int64       `json:"capacity,omitempty"`
	Connection            *string      `json:"connection,omitempty"`
	ConsumingAccount      *string      `json:"consuming_account,omitempty"`
	ContractRef           *string      `json:"contract_ref,omitempty"`
	ExternalRef           *string      `json:"external_ref,omitempty"`
	Ips                   []string     `json:"ips,omitempty"`
	Listed                *bool        `json:"listed,omitempty"`
	Macs                  []string     `json:"macs,omitempty"`
	ManagingAccount       *string      `json:"managing_account,omitempty"`
	NetworkFeatureConfigs []string     `json:"network_feature_configs,omitempty"`
	PurchaseOrder         *string      `json:"purchase_order,omitempty"`
	RoleAssignments       []string     `json:"role_assignments,omitempty"`
	Type                  string       `json:"type"`
	VlanConfig            *interface{} `json:"vlan_config,omitempty"`
}
