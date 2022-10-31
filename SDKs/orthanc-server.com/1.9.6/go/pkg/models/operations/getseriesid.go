package operations



type GetSeriesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSeriesIDQueryParams struct {
    Full *bool `queryParam:"style=form,explode=true,name=full"`
    Short *bool `queryParam:"style=form,explode=true,name=short"`
    
}

type GetSeriesIDRequest struct {
    PathParams GetSeriesIDPathParams 
    QueryParams GetSeriesIDQueryParams 
    
}

type GetSeriesIDResponse struct {
    ContentType string 
    GetSeriesID200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

