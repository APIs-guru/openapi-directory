package operations

type GetNetworkAppliancePortsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkAppliancePortsRequest struct {
	PathParams GetNetworkAppliancePortsPathParams
}

type GetNetworkAppliancePortsResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	GetNetworkAppliancePorts200ApplicationJSONObject map[string]interface{}
}
