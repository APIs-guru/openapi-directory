package shared

type P2PNetworkServiceConfigUpdatePartial struct {
	BillingAccount        *string      `json:"billing_account"`
	Capacity              *int64       `json:"capacity"`
	Connection            *string      `json:"connection"`
	ConsumingAccount      *string      `json:"consuming_account"`
	ContractRef           *string      `json:"contract_ref"`
	ExternalRef           *string      `json:"external_ref"`
	ManagingAccount       *string      `json:"managing_account"`
	NetworkFeatureConfigs []string     `json:"network_feature_configs"`
	PurchaseOrder         *string      `json:"purchase_order"`
	RoleAssignments       []string     `json:"role_assignments"`
	Type                  string       `json:"type"`
	VlanConfig            *interface{} `json:"vlan_config"`
}
