package operations



type GetStudiesIDSeriesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetStudiesIDSeriesQueryParams struct {
    Full *bool `queryParam:"style=form,explode=true,name=full"`
    Short *bool `queryParam:"style=form,explode=true,name=short"`
    
}

type GetStudiesIDSeriesRequest struct {
    PathParams GetStudiesIDSeriesPathParams 
    QueryParams GetStudiesIDSeriesQueryParams 
    
}

type GetStudiesIDSeriesResponse struct {
    ContentType string 
    GetStudiesIDSeries200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

