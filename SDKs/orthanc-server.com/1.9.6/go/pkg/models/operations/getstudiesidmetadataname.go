package operations



type GetStudiesIDMetadataNamePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetStudiesIDMetadataNameHeaders struct {
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    
}

type GetStudiesIDMetadataNameRequest struct {
    PathParams GetStudiesIDMetadataNamePathParams 
    Headers GetStudiesIDMetadataNameHeaders 
    
}

type GetStudiesIDMetadataNameResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

