package operations

type GetNetworkSwitchAlternateManagementInterfacePathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSwitchAlternateManagementInterfaceRequest struct {
	PathParams GetNetworkSwitchAlternateManagementInterfacePathParams
}

type GetNetworkSwitchAlternateManagementInterfaceResponse struct {
	ContentType                                                          string
	StatusCode                                                           int64
	GetNetworkSwitchAlternateManagementInterface200ApplicationJSONObject map[string]interface{}
}
