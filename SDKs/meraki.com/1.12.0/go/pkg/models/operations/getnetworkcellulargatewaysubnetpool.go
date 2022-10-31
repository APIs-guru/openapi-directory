package operations

type GetNetworkCellularGatewaySubnetPoolPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkCellularGatewaySubnetPoolRequest struct {
	PathParams GetNetworkCellularGatewaySubnetPoolPathParams
}

type GetNetworkCellularGatewaySubnetPoolResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	GetNetworkCellularGatewaySubnetPool200ApplicationJSONObject map[string]interface{}
}
