package operations



type GetSeriesQueryParams struct {
    Expand *string `queryParam:"style=form,explode=true,name=expand"`
    Full *bool `queryParam:"style=form,explode=true,name=full"`
    Limit *float64 `queryParam:"style=form,explode=true,name=limit"`
    Short *bool `queryParam:"style=form,explode=true,name=short"`
    Since *float64 `queryParam:"style=form,explode=true,name=since"`
    
}

type GetSeriesRequest struct {
    QueryParams GetSeriesQueryParams 
    
}

type GetSeriesResponse struct {
    ContentType string 
    GetSeries200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

