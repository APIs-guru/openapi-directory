package operations



type GetStudiesIDAttachmentsNameSizePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetStudiesIDAttachmentsNameSizeHeaders struct {
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    
}

type GetStudiesIDAttachmentsNameSizeRequest struct {
    PathParams GetStudiesIDAttachmentsNameSizePathParams 
    Headers GetStudiesIDAttachmentsNameSizeHeaders 
    
}

type GetStudiesIDAttachmentsNameSizeResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

