package operations

type GetNetworkSnmpPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSnmpRequest struct {
	PathParams GetNetworkSnmpPathParams
}

type GetNetworkSnmpResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetNetworkSnmp200ApplicationJSONObject map[string]interface{}
}
