package operations

type GetNetworkCellularGatewayDhcpPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkCellularGatewayDhcpRequest struct {
	PathParams GetNetworkCellularGatewayDhcpPathParams
}

type GetNetworkCellularGatewayDhcpResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	GetNetworkCellularGatewayDhcp200ApplicationJSONObject map[string]interface{}
}
