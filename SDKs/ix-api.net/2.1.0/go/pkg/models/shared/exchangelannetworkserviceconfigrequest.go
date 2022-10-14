package shared

type ExchangeLanNetworkServiceConfigRequest struct {
	Asns                  []int64     `json:"asns"`
	BillingAccount        string      `json:"billing_account"`
	Capacity              *int64      `json:"capacity,omitempty"`
	Connection            string      `json:"connection"`
	ConsumingAccount      string      `json:"consuming_account"`
	ContractRef           *string     `json:"contract_ref,omitempty"`
	ExternalRef           *string     `json:"external_ref,omitempty"`
	Ips                   []string    `json:"ips,omitempty"`
	Listed                bool        `json:"listed"`
	Macs                  []string    `json:"macs,omitempty"`
	ManagingAccount       string      `json:"managing_account"`
	NetworkFeatureConfigs []string    `json:"network_feature_configs,omitempty"`
	NetworkService        string      `json:"network_service"`
	ProductOffering       string      `json:"product_offering"`
	PurchaseOrder         *string     `json:"purchase_order,omitempty"`
	RoleAssignments       []string    `json:"role_assignments"`
	Type                  string      `json:"type"`
	VlanConfig            interface{} `json:"vlan_config"`
}
