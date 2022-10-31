package operations

type GetNetworkApplianceVlanPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	VlanID    string `pathParam:"style=simple,explode=false,name=vlanId"`
}

type GetNetworkApplianceVlanRequest struct {
	PathParams GetNetworkApplianceVlanPathParams
}

type GetNetworkApplianceVlanResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetNetworkApplianceVlan200ApplicationJSONObject map[string]interface{}
}
