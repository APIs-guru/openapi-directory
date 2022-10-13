package operations

type CreateNetworkFloorPlanPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type CreateNetworkFloorPlanRequestBodyBottomLeftCorner struct {
	Lat *float32 `json:"lat"`
	Lng *float32 `json:"lng"`
}

type CreateNetworkFloorPlanRequestBodyBottomRightCorner struct {
	Lat *float32 `json:"lat"`
	Lng *float32 `json:"lng"`
}

type CreateNetworkFloorPlanRequestBodyCenter struct {
	Lat *float32 `json:"lat"`
	Lng *float32 `json:"lng"`
}

type CreateNetworkFloorPlanRequestBodyTopLeftCorner struct {
	Lat *float32 `json:"lat"`
	Lng *float32 `json:"lng"`
}

type CreateNetworkFloorPlanRequestBodyTopRightCorner struct {
	Lat *float32 `json:"lat"`
	Lng *float32 `json:"lng"`
}

type CreateNetworkFloorPlanRequestBody struct {
	BottomLeftCorner  *CreateNetworkFloorPlanRequestBodyBottomLeftCorner  `json:"bottomLeftCorner"`
	BottomRightCorner *CreateNetworkFloorPlanRequestBodyBottomRightCorner `json:"bottomRightCorner"`
	Center            *CreateNetworkFloorPlanRequestBodyCenter            `json:"center"`
	ImageContents     string                                              `json:"imageContents"`
	Name              string                                              `json:"name"`
	TopLeftCorner     *CreateNetworkFloorPlanRequestBodyTopLeftCorner     `json:"topLeftCorner"`
	TopRightCorner    *CreateNetworkFloorPlanRequestBodyTopRightCorner    `json:"topRightCorner"`
}

type CreateNetworkFloorPlanRequest struct {
	PathParams CreateNetworkFloorPlanPathParams
	Request    CreateNetworkFloorPlanRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkFloorPlanResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	CreateNetworkFloorPlan201ApplicationJSONObject map[string]interface{}
}
