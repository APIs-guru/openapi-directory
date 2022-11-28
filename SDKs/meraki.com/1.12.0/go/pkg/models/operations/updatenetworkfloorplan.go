package operations

type UpdateNetworkFloorPlanPathParams struct {
	FloorPlanID string `pathParam:"style=simple,explode=false,name=floorPlanId"`
	NetworkID   string `pathParam:"style=simple,explode=false,name=networkId"`
}

// UpdateNetworkFloorPlanRequestBodyBottomLeftCorner
// The longitude and latitude of the bottom left corner of your floor plan.
type UpdateNetworkFloorPlanRequestBodyBottomLeftCorner struct {
	Lat *float32 `json:"lat,omitempty"`
	Lng *float32 `json:"lng,omitempty"`
}

// UpdateNetworkFloorPlanRequestBodyBottomRightCorner
// The longitude and latitude of the bottom right corner of your floor plan.
type UpdateNetworkFloorPlanRequestBodyBottomRightCorner struct {
	Lat *float32 `json:"lat,omitempty"`
	Lng *float32 `json:"lng,omitempty"`
}

// UpdateNetworkFloorPlanRequestBodyCenter
// The longitude and latitude of the center of your floor plan. If you want to change the geolocation data of your floor plan, either the 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
type UpdateNetworkFloorPlanRequestBodyCenter struct {
	Lat *float32 `json:"lat,omitempty"`
	Lng *float32 `json:"lng,omitempty"`
}

// UpdateNetworkFloorPlanRequestBodyTopLeftCorner
// The longitude and latitude of the top left corner of your floor plan.
type UpdateNetworkFloorPlanRequestBodyTopLeftCorner struct {
	Lat *float32 `json:"lat,omitempty"`
	Lng *float32 `json:"lng,omitempty"`
}

// UpdateNetworkFloorPlanRequestBodyTopRightCorner
// The longitude and latitude of the top right corner of your floor plan.
type UpdateNetworkFloorPlanRequestBodyTopRightCorner struct {
	Lat *float32 `json:"lat,omitempty"`
	Lng *float32 `json:"lng,omitempty"`
}

type UpdateNetworkFloorPlanRequestBody struct {
	BottomLeftCorner  *UpdateNetworkFloorPlanRequestBodyBottomLeftCorner  `json:"bottomLeftCorner,omitempty"`
	BottomRightCorner *UpdateNetworkFloorPlanRequestBodyBottomRightCorner `json:"bottomRightCorner,omitempty"`
	Center            *UpdateNetworkFloorPlanRequestBodyCenter            `json:"center,omitempty"`
	ImageContents     *string                                             `json:"imageContents,omitempty"`
	Name              *string                                             `json:"name,omitempty"`
	TopLeftCorner     *UpdateNetworkFloorPlanRequestBodyTopLeftCorner     `json:"topLeftCorner,omitempty"`
	TopRightCorner    *UpdateNetworkFloorPlanRequestBodyTopRightCorner    `json:"topRightCorner,omitempty"`
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
