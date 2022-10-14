package shared

type P2MpNetworkServiceConfigRequestPartialRoleEnum string

const (
	P2MpNetworkServiceConfigRequestPartialRoleEnumRoot P2MpNetworkServiceConfigRequestPartialRoleEnum = "root"
	P2MpNetworkServiceConfigRequestPartialRoleEnumLeaf P2MpNetworkServiceConfigRequestPartialRoleEnum = "leaf"
)

type P2MpNetworkServiceConfigRequestPartial struct {
	BillingAccount        *string                                         `json:"billing_account,omitempty"`
	Capacity              *int64                                          `json:"capacity,omitempty"`
	Connection            *string                                         `json:"connection,omitempty"`
	ConsumingAccount      *string                                         `json:"consuming_account,omitempty"`
	ContractRef           *string                                         `json:"contract_ref,omitempty"`
	ExternalRef           *string                                         `json:"external_ref,omitempty"`
	ManagingAccount       *string                                         `json:"managing_account,omitempty"`
	NetworkFeatureConfigs []string                                        `json:"network_feature_configs,omitempty"`
	NetworkService        *string                                         `json:"network_service,omitempty"`
	PurchaseOrder         *string                                         `json:"purchase_order,omitempty"`
	Role                  *P2MpNetworkServiceConfigRequestPartialRoleEnum `json:"role,omitempty"`
	RoleAssignments       []string                                        `json:"role_assignments,omitempty"`
	Type                  string                                          `json:"type"`
	VlanConfig            *interface{}                                    `json:"vlan_config,omitempty"`
}
