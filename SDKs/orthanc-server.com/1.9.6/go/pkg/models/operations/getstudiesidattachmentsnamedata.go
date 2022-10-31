package operations



type GetStudiesIDAttachmentsNameDataPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetStudiesIDAttachmentsNameDataHeaders struct {
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    
}

type GetStudiesIDAttachmentsNameDataRequest struct {
    PathParams GetStudiesIDAttachmentsNameDataPathParams 
    Headers GetStudiesIDAttachmentsNameDataHeaders 
    
}

type GetStudiesIDAttachmentsNameDataResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

