package operations

type UpdateDevicePathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type UpdateDeviceRequestBody struct {
	Address         *string  `json:"address,omitempty"`
	FloorPlanID     *string  `json:"floorPlanId,omitempty"`
	Lat             *float32 `json:"lat,omitempty"`
	Lng             *float32 `json:"lng,omitempty"`
	MoveMapMarker   *bool    `json:"moveMapMarker,omitempty"`
	Name            *string  `json:"name,omitempty"`
	Notes           *string  `json:"notes,omitempty"`
	SwitchProfileID *string  `json:"switchProfileId,omitempty"`
	Tags            []string `json:"tags,omitempty"`
}

type UpdateDeviceRequest struct {
	PathParams UpdateDevicePathParams
	Request    *UpdateDeviceRequestBody `request:"mediaType=application/json"`
}

type UpdateDeviceResponse struct {
	ContentType                          string
	StatusCode                           int64
	UpdateDevice200ApplicationJSONObject map[string]interface{}
}
