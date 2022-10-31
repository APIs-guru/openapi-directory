package operations



type GetSeriesIDStatisticsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSeriesIDStatisticsRequest struct {
    PathParams GetSeriesIDStatisticsPathParams 
    
}

type GetSeriesIDStatisticsResponse struct {
    ContentType string 
    GetSeriesIDStatistics200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

