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

type UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits struct {
	LimitDown *int64 `json:"limitDown"`
	LimitUp   *int64 `json:"limitUp"`
}

type UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits struct {
	BandwidthLimits *UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits `json:"bandwidthLimits"`
	Settings        *string                                                                                              `json:"settings"`
}

type UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules struct {
	Definitions              []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions             `json:"definitions"`
	DscpTagValue             *int64                                                                                `json:"dscpTagValue"`
	PcpTagValue              *int64                                                                                `json:"pcpTagValue"`
	PerClientBandwidthLimits *UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits `json:"perClientBandwidthLimits"`
}

type UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody struct {
	DefaultRulesEnabled   *bool                                                          `json:"defaultRulesEnabled"`
	Rules                 []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules `json:"rules"`
	TrafficShapingEnabled *bool                                                          `json:"trafficShapingEnabled"`
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
