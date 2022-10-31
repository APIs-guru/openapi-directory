package operations

type GetNetworkApplianceVlansSettingsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkApplianceVlansSettingsRequest struct {
	PathParams GetNetworkApplianceVlansSettingsPathParams
}

type GetNetworkApplianceVlansSettingsResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	GetNetworkApplianceVlansSettings200ApplicationJSONObject map[string]interface{}
}
