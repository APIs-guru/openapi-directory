package shared

type P2MpNetworkServiceConfigRequestRoleEnum string

const (
	P2MpNetworkServiceConfigRequestRoleEnumRoot P2MpNetworkServiceConfigRequestRoleEnum = "root"
	P2MpNetworkServiceConfigRequestRoleEnumLeaf P2MpNetworkServiceConfigRequestRoleEnum = "leaf"
)

type P2MpNetworkServiceConfigRequest struct {
	BillingAccount        string                                   `json:"billing_account"`
	Capacity              *int64                                   `json:"capacity"`
	Connection            string                                   `json:"connection"`
	ConsumingAccount      string                                   `json:"consuming_account"`
	ContractRef           *string                                  `json:"contract_ref"`
	ExternalRef           *string                                  `json:"external_ref"`
	ManagingAccount       string                                   `json:"managing_account"`
	NetworkFeatureConfigs []string                                 `json:"network_feature_configs"`
	NetworkService        string                                   `json:"network_service"`
	PurchaseOrder         *string                                  `json:"purchase_order"`
	Role                  *P2MpNetworkServiceConfigRequestRoleEnum `json:"role"`
	RoleAssignments       []string                                 `json:"role_assignments"`
	Type                  string                                   `json:"type"`
	VlanConfig            interface{}                              `json:"vlan_config"`
}
