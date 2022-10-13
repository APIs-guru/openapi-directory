package operations

type GetDeviceCameraAnalyticsZonesPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type GetDeviceCameraAnalyticsZonesRequest struct {
	PathParams GetDeviceCameraAnalyticsZonesPathParams
}

type GetDeviceCameraAnalyticsZonesResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	GetDeviceCameraAnalyticsZones200ApplicationJSONObject map[string]interface{}
}
