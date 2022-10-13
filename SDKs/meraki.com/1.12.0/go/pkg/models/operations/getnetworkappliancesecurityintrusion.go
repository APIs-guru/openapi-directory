package operations

type GetNetworkApplianceSecurityIntrusionPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkApplianceSecurityIntrusionRequest struct {
	PathParams GetNetworkApplianceSecurityIntrusionPathParams
}

type GetNetworkApplianceSecurityIntrusionResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	GetNetworkApplianceSecurityIntrusion200ApplicationJSONObject map[string]interface{}
}
