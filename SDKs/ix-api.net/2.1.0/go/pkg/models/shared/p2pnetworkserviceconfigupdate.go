package shared

type P2PNetworkServiceConfigUpdate struct {
	BillingAccount        string      `json:"billing_account"`
	Capacity              *int64      `json:"capacity,omitempty"`
	Connection            string      `json:"connection"`
	ConsumingAccount      string      `json:"consuming_account"`
	ContractRef           *string     `json:"contract_ref,omitempty"`
	ExternalRef           *string     `json:"external_ref,omitempty"`
	ManagingAccount       string      `json:"managing_account"`
	NetworkFeatureConfigs []string    `json:"network_feature_configs,omitempty"`
	PurchaseOrder         *string     `json:"purchase_order,omitempty"`
	RoleAssignments       []string    `json:"role_assignments"`
	Type                  string      `json:"type"`
	VlanConfig            interface{} `json:"vlan_config"`
}
