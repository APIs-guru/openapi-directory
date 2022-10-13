package shared

type ExchangeLanNetworkServiceConfigRequest struct {
	Asns                  []int64     `json:"asns"`
	BillingAccount        string      `json:"billing_account"`
	Capacity              *int64      `json:"capacity"`
	Connection            string      `json:"connection"`
	ConsumingAccount      string      `json:"consuming_account"`
	ContractRef           *string     `json:"contract_ref"`
	ExternalRef           *string     `json:"external_ref"`
	Ips                   []string    `json:"ips"`
	Listed                bool        `json:"listed"`
	Macs                  []string    `json:"macs"`
	ManagingAccount       string      `json:"managing_account"`
	NetworkFeatureConfigs []string    `json:"network_feature_configs"`
	NetworkService        string      `json:"network_service"`
	ProductOffering       string      `json:"product_offering"`
	PurchaseOrder         *string     `json:"purchase_order"`
	RoleAssignments       []string    `json:"role_assignments"`
	Type                  string      `json:"type"`
	VlanConfig            interface{} `json:"vlan_config"`
}
