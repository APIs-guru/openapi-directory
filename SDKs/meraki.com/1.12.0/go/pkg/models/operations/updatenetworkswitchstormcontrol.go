package operations

type UpdateNetworkSwitchStormControlPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkSwitchStormControlRequestBody struct {
	BroadcastThreshold      *int64 `json:"broadcastThreshold,omitempty"`
	MulticastThreshold      *int64 `json:"multicastThreshold,omitempty"`
	UnknownUnicastThreshold *int64 `json:"unknownUnicastThreshold,omitempty"`
}

type UpdateNetworkSwitchStormControlRequest struct {
	PathParams UpdateNetworkSwitchStormControlPathParams
	Request    *UpdateNetworkSwitchStormControlRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSwitchStormControlResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	UpdateNetworkSwitchStormControl200ApplicationJSONObject map[string]interface{}
}
