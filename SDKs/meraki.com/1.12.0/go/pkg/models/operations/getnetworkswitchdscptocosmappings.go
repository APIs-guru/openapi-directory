package operations

type GetNetworkSwitchDscpToCosMappingsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSwitchDscpToCosMappingsRequest struct {
	PathParams GetNetworkSwitchDscpToCosMappingsPathParams
}

type GetNetworkSwitchDscpToCosMappingsResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	GetNetworkSwitchDscpToCosMappings200ApplicationJSONObject map[string]interface{}
}
