package shared

type CloudNetworkServiceConfigUpdate struct {
	BillingAccount        string      `json:"billing_account"`
	CloudVlan             int32       `json:"cloud_vlan"`
	Connection            string      `json:"connection"`
	ConsumingAccount      string      `json:"consuming_account"`
	ContractRef           *string     `json:"contract_ref,omitempty"`
	ExternalRef           *string     `json:"external_ref,omitempty"`
	Handover              int64       `json:"handover"`
	ManagingAccount       string      `json:"managing_account"`
	NetworkFeatureConfigs []string    `json:"network_feature_configs,omitempty"`
	PurchaseOrder         *string     `json:"purchase_order,omitempty"`
	RoleAssignments       []string    `json:"role_assignments"`
	Type                  string      `json:"type"`
	VlanConfig            interface{} `json:"vlan_config"`
}
