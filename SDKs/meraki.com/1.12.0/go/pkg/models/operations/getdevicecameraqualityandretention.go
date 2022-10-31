package operations

type GetDeviceCameraQualityAndRetentionPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type GetDeviceCameraQualityAndRetentionRequest struct {
	PathParams GetDeviceCameraQualityAndRetentionPathParams
}

type GetDeviceCameraQualityAndRetentionResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	GetDeviceCameraQualityAndRetention200ApplicationJSONObject map[string]interface{}
}
