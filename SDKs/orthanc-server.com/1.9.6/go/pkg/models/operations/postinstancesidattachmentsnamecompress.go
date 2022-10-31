package operations



type PostInstancesIDAttachmentsNameCompressPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type PostInstancesIDAttachmentsNameCompressRequest struct {
    PathParams PostInstancesIDAttachmentsNameCompressPathParams 
    
}

type PostInstancesIDAttachmentsNameCompressResponse struct {
    ContentType string 
    StatusCode int64 
    
}

