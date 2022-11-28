package operations

type CreateNetworkFloorPlanPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

// CreateNetworkFloorPlanRequestBodyBottomLeftCorner
// The longitude and latitude of the bottom left corner of your floor plan.
type CreateNetworkFloorPlanRequestBodyBottomLeftCorner struct {
	Lat *float32 `json:"lat,omitempty"`
	Lng *float32 `json:"lng,omitempty"`
}

// CreateNetworkFloorPlanRequestBodyBottomRightCorner
// The longitude and latitude of the bottom right corner of your floor plan.
type CreateNetworkFloorPlanRequestBodyBottomRightCorner struct {
	Lat *float32 `json:"lat,omitempty"`
	Lng *float32 `json:"lng,omitempty"`
}

// CreateNetworkFloorPlanRequestBodyCenter
// The longitude and latitude of the center of your floor plan. The 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
type CreateNetworkFloorPlanRequestBodyCenter struct {
	Lat *float32 `json:"lat,omitempty"`
	Lng *float32 `json:"lng,omitempty"`
}

// CreateNetworkFloorPlanRequestBodyTopLeftCorner
// The longitude and latitude of the top left corner of your floor plan.
type CreateNetworkFloorPlanRequestBodyTopLeftCorner struct {
	Lat *float32 `json:"lat,omitempty"`
	Lng *float32 `json:"lng,omitempty"`
}

// CreateNetworkFloorPlanRequestBodyTopRightCorner
// The longitude and latitude of the top right corner of your floor plan.
type CreateNetworkFloorPlanRequestBodyTopRightCorner struct {
	Lat *float32 `json:"lat,omitempty"`
	Lng *float32 `json:"lng,omitempty"`
}

type CreateNetworkFloorPlanRequestBody struct {
	BottomLeftCorner  *CreateNetworkFloorPlanRequestBodyBottomLeftCorner  `json:"bottomLeftCorner,omitempty"`
	BottomRightCorner *CreateNetworkFloorPlanRequestBodyBottomRightCorner `json:"bottomRightCorner,omitempty"`
	Center            *CreateNetworkFloorPlanRequestBodyCenter            `json:"center,omitempty"`
	ImageContents     string                                              `json:"imageContents"`
	Name              string                                              `json:"name"`
	TopLeftCorner     *CreateNetworkFloorPlanRequestBodyTopLeftCorner     `json:"topLeftCorner,omitempty"`
	TopRightCorner    *CreateNetworkFloorPlanRequestBodyTopRightCorner    `json:"topRightCorner,omitempty"`
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
