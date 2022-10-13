package operations

type UpdateNetworkWirelessSettingsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum string

const (
	UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnumMinimizeUpgradeTime    UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum = "minimizeUpgradeTime"
	UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnumMinimizeClientDowntime UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum = "minimizeClientDowntime"
)

type UpdateNetworkWirelessSettingsRequestBody struct {
	Ipv6BridgeEnabled        *bool                                                        `json:"ipv6BridgeEnabled"`
	LedLightsOn              *bool                                                        `json:"ledLightsOn"`
	LocationAnalyticsEnabled *bool                                                        `json:"locationAnalyticsEnabled"`
	MeshingEnabled           *bool                                                        `json:"meshingEnabled"`
	UpgradeStrategy          *UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum `json:"upgradeStrategy"`
}

type UpdateNetworkWirelessSettingsRequest struct {
	PathParams UpdateNetworkWirelessSettingsPathParams
	Request    *UpdateNetworkWirelessSettingsRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkWirelessSettingsResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	UpdateNetworkWirelessSettings200ApplicationJSONObject map[string]interface{}
}
