package operations



type PostModalitiesIDFindSeriesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostModalitiesIDFindSeriesRequest struct {
    PathParams PostModalitiesIDFindSeriesPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostModalitiesIDFindSeriesResponse struct {
    ContentType string 
    PostModalitiesIDFindSeries200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

