package operations



type GetDeviceCameraAnalyticsOverviewPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}


type GetDeviceCameraAnalyticsOverviewObjectTypeEnum string

const (
    GetDeviceCameraAnalyticsOverviewObjectTypeEnumPerson GetDeviceCameraAnalyticsOverviewObjectTypeEnum = "person"
GetDeviceCameraAnalyticsOverviewObjectTypeEnumVehicle GetDeviceCameraAnalyticsOverviewObjectTypeEnum = "vehicle"
)


type GetDeviceCameraAnalyticsOverviewQueryParams struct {
    ObjectType *GetDeviceCameraAnalyticsOverviewObjectTypeEnum `queryParam:"style=form,explode=true,name=objectType"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    
}

type GetDeviceCameraAnalyticsOverviewRequest struct {
    PathParams GetDeviceCameraAnalyticsOverviewPathParams 
    QueryParams GetDeviceCameraAnalyticsOverviewQueryParams 
    
}

type GetDeviceCameraAnalyticsOverviewResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceCameraAnalyticsOverview200ApplicationJSONObject map[string]interface{} 
    
}

