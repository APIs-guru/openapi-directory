package operations

type GetNetworkSwitchQosRulesOrderPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSwitchQosRulesOrderRequest struct {
	PathParams GetNetworkSwitchQosRulesOrderPathParams
}

type GetNetworkSwitchQosRulesOrderResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	GetNetworkSwitchQosRulesOrder200ApplicationJSONObject map[string]interface{}
}
