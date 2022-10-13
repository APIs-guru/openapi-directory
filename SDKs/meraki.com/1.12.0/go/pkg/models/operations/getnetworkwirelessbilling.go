package operations

type GetNetworkWirelessBillingPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkWirelessBillingRequest struct {
	PathParams GetNetworkWirelessBillingPathParams
}

type GetNetworkWirelessBillingResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	GetNetworkWirelessBilling200ApplicationJSONObject map[string]interface{}
}
