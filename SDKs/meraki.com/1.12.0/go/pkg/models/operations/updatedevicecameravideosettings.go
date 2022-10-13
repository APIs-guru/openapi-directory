package operations

type UpdateDeviceCameraVideoSettingsPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type UpdateDeviceCameraVideoSettingsRequestBody struct {
	ExternalRtspEnabled *bool `json:"externalRtspEnabled"`
}

type UpdateDeviceCameraVideoSettingsRequest struct {
	PathParams UpdateDeviceCameraVideoSettingsPathParams
	Request    *UpdateDeviceCameraVideoSettingsRequestBody `request:"mediaType=application/json"`
}

type UpdateDeviceCameraVideoSettingsResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	UpdateDeviceCameraVideoSettings200ApplicationJSONObject map[string]interface{}
}
