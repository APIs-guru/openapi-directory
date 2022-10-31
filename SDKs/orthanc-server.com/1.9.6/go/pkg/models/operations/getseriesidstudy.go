package operations



type GetSeriesIDStudyPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSeriesIDStudyQueryParams struct {
    Full *bool `queryParam:"style=form,explode=true,name=full"`
    Short *bool `queryParam:"style=form,explode=true,name=short"`
    
}

type GetSeriesIDStudyRequest struct {
    PathParams GetSeriesIDStudyPathParams 
    QueryParams GetSeriesIDStudyQueryParams 
    
}

type GetSeriesIDStudyResponse struct {
    ContentType string 
    GetSeriesIDStudy200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

