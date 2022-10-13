package operations

type GetNetworkClientPolicyPathParams struct {
	ClientID  string `pathParam:"style=simple,explode=false,name=clientId"`
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkClientPolicyRequest struct {
	PathParams GetNetworkClientPolicyPathParams
}

type GetNetworkClientPolicyResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetNetworkClientPolicy200ApplicationJSONObject map[string]interface{}
}
