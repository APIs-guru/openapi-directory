package operations

type GetDeviceCameraWirelessProfilesPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type GetDeviceCameraWirelessProfilesRequest struct {
	PathParams GetDeviceCameraWirelessProfilesPathParams
}

type GetDeviceCameraWirelessProfilesResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	GetDeviceCameraWirelessProfiles200ApplicationJSONObject map[string]interface{}
}
