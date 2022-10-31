package operations

type GetDeviceCameraVideoSettingsPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type GetDeviceCameraVideoSettingsRequest struct {
	PathParams GetDeviceCameraVideoSettingsPathParams
}

type GetDeviceCameraVideoSettingsResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetDeviceCameraVideoSettings200ApplicationJSONObject map[string]interface{}
}
