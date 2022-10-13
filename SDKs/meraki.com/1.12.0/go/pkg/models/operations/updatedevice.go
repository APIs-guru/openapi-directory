package operations

type UpdateDevicePathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type UpdateDeviceRequestBody struct {
	Address         *string  `json:"address"`
	FloorPlanID     *string  `json:"floorPlanId"`
	Lat             *float32 `json:"lat"`
	Lng             *float32 `json:"lng"`
	MoveMapMarker   *bool    `json:"moveMapMarker"`
	Name            *string  `json:"name"`
	Notes           *string  `json:"notes"`
	SwitchProfileID *string  `json:"switchProfileId"`
	Tags            []string `json:"tags"`
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
