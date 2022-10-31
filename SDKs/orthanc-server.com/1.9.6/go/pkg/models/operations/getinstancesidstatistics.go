package operations



type GetInstancesIDStatisticsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetInstancesIDStatisticsRequest struct {
    PathParams GetInstancesIDStatisticsPathParams 
    
}

type GetInstancesIDStatisticsResponse struct {
    ContentType string 
    GetInstancesIDStatistics200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

