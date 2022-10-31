package operations

type DeleteNetworkFloorPlanPathParams struct {
	FloorPlanID string `pathParam:"style=simple,explode=false,name=floorPlanId"`
	NetworkID   string `pathParam:"style=simple,explode=false,name=networkId"`
}

type DeleteNetworkFloorPlanRequest struct {
	PathParams DeleteNetworkFloorPlanPathParams
}

type DeleteNetworkFloorPlanResponse struct {
	ContentType string
	StatusCode  int64
}
