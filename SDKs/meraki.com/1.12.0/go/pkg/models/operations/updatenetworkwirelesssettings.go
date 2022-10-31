package operations



type UpdateNetworkWirelessSettingsPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}


type UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum string

const (
    UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnumMinimizeUpgradeTime UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum = "minimizeUpgradeTime"
UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnumMinimizeClientDowntime UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum = "minimizeClientDowntime"
)


type UpdateNetworkWirelessSettingsRequestBody struct {
    Ipv6BridgeEnabled *bool `json:"ipv6BridgeEnabled,omitempty"`
    LedLightsOn *bool `json:"ledLightsOn,omitempty"`
    LocationAnalyticsEnabled *bool `json:"locationAnalyticsEnabled,omitempty"`
    MeshingEnabled *bool `json:"meshingEnabled,omitempty"`
    UpgradeStrategy *UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum `json:"upgradeStrategy,omitempty"`
    
}

type UpdateNetworkWirelessSettingsRequest struct {
    PathParams UpdateNetworkWirelessSettingsPathParams 
    Request *UpdateNetworkWirelessSettingsRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkWirelessSettingsResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkWirelessSettings200ApplicationJSONObject map[string]interface{} 
    
}

