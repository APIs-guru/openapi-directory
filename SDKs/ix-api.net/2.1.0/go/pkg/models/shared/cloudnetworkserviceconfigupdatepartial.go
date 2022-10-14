package shared

type CloudNetworkServiceConfigUpdatePartial struct {
	BillingAccount        *string      `json:"billing_account,omitempty"`
	CloudVlan             *int32       `json:"cloud_vlan,omitempty"`
	Connection            *string      `json:"connection,omitempty"`
	ConsumingAccount      *string      `json:"consuming_account,omitempty"`
	ContractRef           *string      `json:"contract_ref,omitempty"`
	ExternalRef           *string      `json:"external_ref,omitempty"`
	Handover              *int64       `json:"handover,omitempty"`
	ManagingAccount       *string      `json:"managing_account,omitempty"`
	NetworkFeatureConfigs []string     `json:"network_feature_configs,omitempty"`
	PurchaseOrder         *string      `json:"purchase_order,omitempty"`
	RoleAssignments       []string     `json:"role_assignments,omitempty"`
	Type                  string       `json:"type"`
	VlanConfig            *interface{} `json:"vlan_config,omitempty"`
}
