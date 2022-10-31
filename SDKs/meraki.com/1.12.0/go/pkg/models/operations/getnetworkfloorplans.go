package operations

type GetNetworkFloorPlansPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkFloorPlansRequest struct {
	PathParams GetNetworkFloorPlansPathParams
}

type GetNetworkFloorPlansResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetNetworkFloorPlans200ApplicationJSONObject map[string]interface{}
}
