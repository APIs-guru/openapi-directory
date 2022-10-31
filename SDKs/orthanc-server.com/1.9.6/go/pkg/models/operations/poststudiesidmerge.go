package operations



type PostStudiesIDMergePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostStudiesIDMergeRequest struct {
    PathParams PostStudiesIDMergePathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostStudiesIDMergeResponse struct {
    ContentType string 
    PostStudiesIDMerge200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

