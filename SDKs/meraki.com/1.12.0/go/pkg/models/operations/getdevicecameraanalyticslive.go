package operations

type GetDeviceCameraAnalyticsLivePathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type GetDeviceCameraAnalyticsLiveRequest struct {
	PathParams GetDeviceCameraAnalyticsLivePathParams
}

type GetDeviceCameraAnalyticsLiveResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetDeviceCameraAnalyticsLive200ApplicationJSONObject map[string]interface{}
}
