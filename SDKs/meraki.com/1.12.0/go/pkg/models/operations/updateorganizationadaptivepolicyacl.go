package operations

type UpdateOrganizationAdaptivePolicyACLPathParams struct {
	ID             string `pathParam:"style=simple,explode=false,name=id"`
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum string

const (
	UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnumAny  UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum = "any"
	UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnumIpv4 UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum = "ipv4"
	UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnumIpv6 UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum = "ipv6"
)

type UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum string

const (
	UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumAllow UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum = "allow"
	UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumDeny  UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum = "deny"
)

type UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum string

const (
	UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumTCP  UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = "tcp"
	UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumUDP  UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = "udp"
	UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumIcmp UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = "icmp"
	UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumAny  UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = "any"
)

type UpdateOrganizationAdaptivePolicyACLRequestBodyRules struct {
	DstPort  *string                                                         `json:"dstPort"`
	Policy   UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum   `json:"policy"`
	Protocol UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum `json:"protocol"`
	SrcPort  *string                                                         `json:"srcPort"`
}

type UpdateOrganizationAdaptivePolicyACLRequestBody struct {
	Description *string                                                      `json:"description"`
	IPVersion   *UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum `json:"ipVersion"`
	Name        *string                                                      `json:"name"`
	Rules       []UpdateOrganizationAdaptivePolicyACLRequestBodyRules        `json:"rules"`
}

type UpdateOrganizationAdaptivePolicyACLRequest struct {
	PathParams UpdateOrganizationAdaptivePolicyACLPathParams
	Request    *UpdateOrganizationAdaptivePolicyACLRequestBody `request:"mediaType=application/json"`
}

type UpdateOrganizationAdaptivePolicyACLResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	UpdateOrganizationAdaptivePolicyACL200ApplicationJSONObject map[string]interface{}
}
