package operations



type GetStudiesIDStatisticsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetStudiesIDStatisticsRequest struct {
    PathParams GetStudiesIDStatisticsPathParams 
    
}

type GetStudiesIDStatisticsResponse struct {
    ContentType string 
    GetStudiesIDStatistics200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

