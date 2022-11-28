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

// UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits
// The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
type UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits struct {
	LimitDown *int64 `json:"limitDown,omitempty"`
	LimitUp   *int64 `json:"limitUp,omitempty"`
}

// UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits
//
//	An object describing the bandwidth settings for your rule.
type UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits struct {
	BandwidthLimits *UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits `json:"bandwidthLimits,omitempty"`
	Settings        *string                                                                                           `json:"settings,omitempty"`
}

type UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules struct {
	Definitions              []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions             `json:"definitions"`
	DscpTagValue             *int64                                                                             `json:"dscpTagValue,omitempty"`
	PerClientBandwidthLimits *UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits `json:"perClientBandwidthLimits,omitempty"`
	Priority                 *string                                                                            `json:"priority,omitempty"`
}

type UpdateNetworkApplianceTrafficShapingRulesRequestBody struct {
	DefaultRulesEnabled *bool                                                       `json:"defaultRulesEnabled,omitempty"`
	Rules               []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules `json:"rules,omitempty"`
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
