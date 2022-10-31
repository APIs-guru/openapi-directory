package operations



type GetSeriesIDAttachmentsNameSizePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetSeriesIDAttachmentsNameSizeHeaders struct {
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    
}

type GetSeriesIDAttachmentsNameSizeRequest struct {
    PathParams GetSeriesIDAttachmentsNameSizePathParams 
    Headers GetSeriesIDAttachmentsNameSizeHeaders 
    
}

type GetSeriesIDAttachmentsNameSizeResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

