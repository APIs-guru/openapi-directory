package operations



type GetDeviceCameraAnalyticsZoneHistoryPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    ZoneID string `pathParam:"style=simple,explode=false,name=zoneId"`
    
}


type GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum string

const (
    GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnumPerson GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum = "person"
GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnumVehicle GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum = "vehicle"
)


type GetDeviceCameraAnalyticsZoneHistoryQueryParams struct {
    ObjectType *GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum `queryParam:"style=form,explode=true,name=objectType"`
    Resolution *int64 `queryParam:"style=form,explode=true,name=resolution"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    
}

type GetDeviceCameraAnalyticsZoneHistoryRequest struct {
    PathParams GetDeviceCameraAnalyticsZoneHistoryPathParams 
    QueryParams GetDeviceCameraAnalyticsZoneHistoryQueryParams 
    
}

type GetDeviceCameraAnalyticsZoneHistoryResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceCameraAnalyticsZoneHistory200ApplicationJSONObject map[string]interface{} 
    
}

