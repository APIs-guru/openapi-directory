package operations

type UpdateNetworkApplianceSecurityIntrusionPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum string

const (
	UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnumConnectivity UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum = "connectivity"
	UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnumBalanced     UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum = "balanced"
	UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnumSecurity     UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum = "security"
)

type UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum string

const (
	UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnumPrevention UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum = "prevention"
	UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnumDetection  UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum = "detection"
	UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnumDisabled   UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum = "disabled"
)

type UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks struct {
	ExcludedCidr []string `json:"excludedCidr"`
	IncludedCidr []string `json:"includedCidr"`
	UseDefault   *bool    `json:"useDefault"`
}

type UpdateNetworkApplianceSecurityIntrusionRequestBody struct {
	IdsRulesets       *UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum   `json:"idsRulesets"`
	Mode              *UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum          `json:"mode"`
	ProtectedNetworks *UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks `json:"protectedNetworks"`
}

type UpdateNetworkApplianceSecurityIntrusionRequest struct {
	PathParams UpdateNetworkApplianceSecurityIntrusionPathParams
	Request    *UpdateNetworkApplianceSecurityIntrusionRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkApplianceSecurityIntrusionResponse struct {
	ContentType                                                     string
	StatusCode                                                      int64
	UpdateNetworkApplianceSecurityIntrusion200ApplicationJSONObject map[string]interface{}
}
