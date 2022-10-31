package operations



type PostStudiesIDModifyPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostStudiesIDModifyRequest struct {
    PathParams PostStudiesIDModifyPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostStudiesIDModifyResponse struct {
    ContentType string 
    PostStudiesIDModify200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

