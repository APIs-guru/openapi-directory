package operations

type UpdateNetworkSwitchAccessControlListsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnum string

const (
	UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnumAny  UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnum = "any"
	UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnumIpv4 UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnum = "ipv4"
	UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnumIpv6 UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnum = "ipv6"
)

type UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum string

const (
	UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnumAllow UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum = "allow"
	UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnumDeny  UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum = "deny"
)

type UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum string

const (
	UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnumTCP UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum = "tcp"
	UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnumUDP UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum = "udp"
	UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnumAny UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum = "any"
)

type UpdateNetworkSwitchAccessControlListsRequestBodyRules struct {
	Comment   *string                                                             `json:"comment"`
	DstCidr   string                                                              `json:"dstCidr"`
	DstPort   *string                                                             `json:"dstPort"`
	IPVersion *UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnum `json:"ipVersion"`
	Policy    UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum     `json:"policy"`
	Protocol  UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum   `json:"protocol"`
	SrcCidr   string                                                              `json:"srcCidr"`
	SrcPort   *string                                                             `json:"srcPort"`
	Vlan      *string                                                             `json:"vlan"`
}

type UpdateNetworkSwitchAccessControlListsRequestBody struct {
	Rules []UpdateNetworkSwitchAccessControlListsRequestBodyRules `json:"rules"`
}

type UpdateNetworkSwitchAccessControlListsRequest struct {
	PathParams UpdateNetworkSwitchAccessControlListsPathParams
	Request    UpdateNetworkSwitchAccessControlListsRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSwitchAccessControlListsResponse struct {
	ContentType                                                   string
	StatusCode                                                    int64
	UpdateNetworkSwitchAccessControlLists200ApplicationJSONObject map[string]interface{}
}
