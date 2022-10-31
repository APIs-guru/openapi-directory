package operations

type GetNetworkFloorPlanPathParams struct {
	FloorPlanID string `pathParam:"style=simple,explode=false,name=floorPlanId"`
	NetworkID   string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkFloorPlanRequest struct {
	PathParams GetNetworkFloorPlanPathParams
}

type GetNetworkFloorPlanResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetNetworkFloorPlan200ApplicationJSONObject map[string]interface{}
}
