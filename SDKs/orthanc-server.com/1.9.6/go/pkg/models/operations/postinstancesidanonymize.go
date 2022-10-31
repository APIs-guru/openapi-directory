package operations



type PostInstancesIDAnonymizePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostInstancesIDAnonymizeRequest struct {
    PathParams PostInstancesIDAnonymizePathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostInstancesIDAnonymizeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

