package operations



type PostModalitiesIDFindInstancePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostModalitiesIDFindInstanceRequest struct {
    PathParams PostModalitiesIDFindInstancePathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostModalitiesIDFindInstanceResponse struct {
    ContentType string 
    PostModalitiesIDFindInstance200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

