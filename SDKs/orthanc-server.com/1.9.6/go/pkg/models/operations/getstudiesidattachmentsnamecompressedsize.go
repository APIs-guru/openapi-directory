package operations



type GetStudiesIDAttachmentsNameCompressedSizePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetStudiesIDAttachmentsNameCompressedSizeHeaders struct {
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    
}

type GetStudiesIDAttachmentsNameCompressedSizeRequest struct {
    PathParams GetStudiesIDAttachmentsNameCompressedSizePathParams 
    Headers GetStudiesIDAttachmentsNameCompressedSizeHeaders 
    
}

type GetStudiesIDAttachmentsNameCompressedSizeResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

