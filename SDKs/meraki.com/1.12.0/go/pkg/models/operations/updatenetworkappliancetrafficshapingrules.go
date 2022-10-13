package operations

type UpdateNetworkApplianceTrafficShapingRulesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum string

const (
	UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplication         UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = "application"
	UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplicationCategory UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = "applicationCategory"
	UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumHost                UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = "host"
	UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumPort                UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = "port"
	UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumIPRange             UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = "ipRange"
	UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumLocalNet            UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = "localNet"
)

type UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions struct {
	Type  UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum `json:"type"`
	Value string                                                                       `json:"value"`
}

type UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits struct {
	LimitDown *int64 `json:"limitDown"`
	LimitUp   *int64 `json:"limitUp"`
}

type UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits struct {
	BandwidthLimits *UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits `json:"bandwidthLimits"`
	Settings        *string                                                                                           `json:"settings"`
}

type UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules struct {
	Definitions              []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions             `json:"definitions"`
	DscpTagValue             *int64                                                                             `json:"dscpTagValue"`
	PerClientBandwidthLimits *UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits `json:"perClientBandwidthLimits"`
	Priority                 *string                                                                            `json:"priority"`
}

type UpdateNetworkApplianceTrafficShapingRulesRequestBody struct {
	DefaultRulesEnabled *bool                                                       `json:"defaultRulesEnabled"`
	Rules               []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules `json:"rules"`
}

type UpdateNetworkApplianceTrafficShapingRulesRequest struct {
	PathParams UpdateNetworkApplianceTrafficShapingRulesPathParams
	Request    *UpdateNetworkApplianceTrafficShapingRulesRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkApplianceTrafficShapingRulesResponse struct {
	ContentType                                                       string
	StatusCode                                                        int64
	UpdateNetworkApplianceTrafficShapingRules200ApplicationJSONObject map[string]interface{}
}
