package operations



type PostModalitiesIDQueryPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostModalitiesIDQueryRequest struct {
    PathParams PostModalitiesIDQueryPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostModalitiesIDQueryResponse struct {
    ContentType string 
    PostModalitiesIDQuery200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

