package operations



type PostStudiesIDSplitPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostStudiesIDSplitRequest struct {
    PathParams PostStudiesIDSplitPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostStudiesIDSplitResponse struct {
    ContentType string 
    PostStudiesIDSplit200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

