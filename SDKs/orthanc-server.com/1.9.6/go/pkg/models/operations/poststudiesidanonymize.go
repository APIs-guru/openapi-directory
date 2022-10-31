package operations



type PostStudiesIDAnonymizePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostStudiesIDAnonymizeRequest struct {
    PathParams PostStudiesIDAnonymizePathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostStudiesIDAnonymizeResponse struct {
    ContentType string 
    PostStudiesIDAnonymize200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

