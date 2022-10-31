package operations



type GetPatientsIDStatisticsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetPatientsIDStatisticsRequest struct {
    PathParams GetPatientsIDStatisticsPathParams 
    
}

type GetPatientsIDStatisticsResponse struct {
    ContentType string 
    GetPatientsIDStatistics200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

