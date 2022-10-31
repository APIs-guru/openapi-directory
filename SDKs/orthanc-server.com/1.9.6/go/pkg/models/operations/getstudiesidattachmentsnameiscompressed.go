package operations



type GetStudiesIDAttachmentsNameIsCompressedPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetStudiesIDAttachmentsNameIsCompressedHeaders struct {
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    
}

type GetStudiesIDAttachmentsNameIsCompressedRequest struct {
    PathParams GetStudiesIDAttachmentsNameIsCompressedPathParams 
    Headers GetStudiesIDAttachmentsNameIsCompressedHeaders 
    
}

type GetStudiesIDAttachmentsNameIsCompressedResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

