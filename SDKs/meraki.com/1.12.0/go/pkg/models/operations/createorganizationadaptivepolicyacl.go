package operations

type CreateOrganizationAdaptivePolicyACLPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type CreateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum string

const (
	CreateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnumAny  CreateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum = "any"
	CreateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnumIpv4 CreateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum = "ipv4"
	CreateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnumIpv6 CreateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum = "ipv6"
)

type CreateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum string

const (
	CreateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumAllow CreateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum = "allow"
	CreateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumDeny  CreateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum = "deny"
)

type CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum string

const (
	CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumTCP  CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = "tcp"
	CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumUDP  CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = "udp"
	CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumIcmp CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = "icmp"
	CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumAny  CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = "any"
)

type CreateOrganizationAdaptivePolicyACLRequestBodyRules struct {
	DstPort  *string                                                         `json:"dstPort,omitempty"`
	Policy   CreateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum   `json:"policy"`
	Protocol CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum `json:"protocol"`
	SrcPort  *string                                                         `json:"srcPort,omitempty"`
}

type CreateOrganizationAdaptivePolicyACLRequestBody struct {
	Description *string                                                     `json:"description,omitempty"`
	IPVersion   CreateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum `json:"ipVersion"`
	Name        string                                                      `json:"name"`
	Rules       []CreateOrganizationAdaptivePolicyACLRequestBodyRules       `json:"rules"`
}

type CreateOrganizationAdaptivePolicyACLRequest struct {
	PathParams CreateOrganizationAdaptivePolicyACLPathParams
	Request    CreateOrganizationAdaptivePolicyACLRequestBody `request:"mediaType=application/json"`
}

type CreateOrganizationAdaptivePolicyACLResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	CreateOrganizationAdaptivePolicyACL200ApplicationJSONObject map[string]interface{}
}
