package operations



type PostStudiesIDAttachmentsNameCompressPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type PostStudiesIDAttachmentsNameCompressRequest struct {
    PathParams PostStudiesIDAttachmentsNameCompressPathParams 
    
}

type PostStudiesIDAttachmentsNameCompressResponse struct {
    ContentType string 
    StatusCode int64 
    
}

