package operations

type UpdateNetworkWirelessSsidTrafficShapingRulesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

type UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum string

const (
	UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplication         UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = "application"
	UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplicationCategory UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = "applicationCategory"
	UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumHost                UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = "host"
	UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumPort                UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = "port"
	UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumIPRange             UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = "ipRange"
	UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumLocalNet            UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = "localNet"
)

type UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions struct {
	Type  UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum `json:"type"`
	Value string                                                                          `json:"value"`
}

// UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits
// The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
type UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits struct {
	LimitDown *int64 `json:"limitDown,omitempty"`
	LimitUp   *int64 `json:"limitUp,omitempty"`
}

// UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits
//
//	An object describing the bandwidth settings for your rule.
type UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits struct {
	BandwidthLimits *UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits `json:"bandwidthLimits,omitempty"`
	Settings        *string                                                                                              `json:"settings,omitempty"`
}

type UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules struct {
	Definitions              []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions             `json:"definitions"`
	DscpTagValue             *int64                                                                                `json:"dscpTagValue,omitempty"`
	PcpTagValue              *int64                                                                                `json:"pcpTagValue,omitempty"`
	PerClientBandwidthLimits *UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits `json:"perClientBandwidthLimits,omitempty"`
}

type UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody struct {
	DefaultRulesEnabled   *bool                                                          `json:"defaultRulesEnabled,omitempty"`
	Rules                 []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules `json:"rules,omitempty"`
	TrafficShapingEnabled *bool                                                          `json:"trafficShapingEnabled,omitempty"`
}

type UpdateNetworkWirelessSsidTrafficShapingRulesRequest struct {
	PathParams UpdateNetworkWirelessSsidTrafficShapingRulesPathParams
	Request    *UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkWirelessSsidTrafficShapingRulesResponse struct {
	ContentType                                                          string
	StatusCode                                                           int64
	UpdateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject map[string]interface{}
}
