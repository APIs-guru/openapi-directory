package operations

type GetNetworkWirelessRfProfilePathParams struct {
	NetworkID   string `pathParam:"style=simple,explode=false,name=networkId"`
	RfProfileID string `pathParam:"style=simple,explode=false,name=rfProfileId"`
}

type GetNetworkWirelessRfProfileRequest struct {
	PathParams GetNetworkWirelessRfProfilePathParams
}

type GetNetworkWirelessRfProfileResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	GetNetworkWirelessRfProfile200ApplicationJSONObject map[string]interface{}
}
