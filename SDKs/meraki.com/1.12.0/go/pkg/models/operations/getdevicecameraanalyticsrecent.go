package operations

type GetDeviceCameraAnalyticsRecentPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type GetDeviceCameraAnalyticsRecentObjectTypeEnum string

const (
	GetDeviceCameraAnalyticsRecentObjectTypeEnumPerson  GetDeviceCameraAnalyticsRecentObjectTypeEnum = "person"
	GetDeviceCameraAnalyticsRecentObjectTypeEnumVehicle GetDeviceCameraAnalyticsRecentObjectTypeEnum = "vehicle"
)

type GetDeviceCameraAnalyticsRecentQueryParams struct {
	ObjectType *GetDeviceCameraAnalyticsRecentObjectTypeEnum `queryParam:"style=form,explode=true,name=objectType"`
}

type GetDeviceCameraAnalyticsRecentRequest struct {
	PathParams  GetDeviceCameraAnalyticsRecentPathParams
	QueryParams GetDeviceCameraAnalyticsRecentQueryParams
}

type GetDeviceCameraAnalyticsRecentResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	GetDeviceCameraAnalyticsRecent200ApplicationJSONObject map[string]interface{}
}
