package operations

type UpdateNetworkFloorPlanPathParams struct {
	FloorPlanID string `pathParam:"style=simple,explode=false,name=floorPlanId"`
	NetworkID   string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkFloorPlanRequestBodyBottomLeftCorner struct {
	Lat *float32 `json:"lat"`
	Lng *float32 `json:"lng"`
}

type UpdateNetworkFloorPlanRequestBodyBottomRightCorner struct {
	Lat *float32 `json:"lat"`
	Lng *float32 `json:"lng"`
}

type UpdateNetworkFloorPlanRequestBodyCenter struct {
	Lat *float32 `json:"lat"`
	Lng *float32 `json:"lng"`
}

type UpdateNetworkFloorPlanRequestBodyTopLeftCorner struct {
	Lat *float32 `json:"lat"`
	Lng *float32 `json:"lng"`
}

type UpdateNetworkFloorPlanRequestBodyTopRightCorner struct {
	Lat *float32 `json:"lat"`
	Lng *float32 `json:"lng"`
}

type UpdateNetworkFloorPlanRequestBody struct {
	BottomLeftCorner  *UpdateNetworkFloorPlanRequestBodyBottomLeftCorner  `json:"bottomLeftCorner"`
	BottomRightCorner *UpdateNetworkFloorPlanRequestBodyBottomRightCorner `json:"bottomRightCorner"`
	Center            *UpdateNetworkFloorPlanRequestBodyCenter            `json:"center"`
	ImageContents     *string                                             `json:"imageContents"`
	Name              *string                                             `json:"name"`
	TopLeftCorner     *UpdateNetworkFloorPlanRequestBodyTopLeftCorner     `json:"topLeftCorner"`
	TopRightCorner    *UpdateNetworkFloorPlanRequestBodyTopRightCorner    `json:"topRightCorner"`
}

type UpdateNetworkFloorPlanRequest struct {
	PathParams UpdateNetworkFloorPlanPathParams
	Request    *UpdateNetworkFloorPlanRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkFloorPlanResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	UpdateNetworkFloorPlan200ApplicationJSONObject map[string]interface{}
}
