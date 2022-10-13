package operations

type GetNetworkSwitchStackPathParams struct {
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
}

type GetNetworkSwitchStackRequest struct {
	PathParams GetNetworkSwitchStackPathParams
}

type GetNetworkSwitchStackResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetNetworkSwitchStack200ApplicationJSONObject map[string]interface{}
}
