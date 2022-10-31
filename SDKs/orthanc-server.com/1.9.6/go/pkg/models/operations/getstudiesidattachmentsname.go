package operations



type GetStudiesIDAttachmentsNamePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetStudiesIDAttachmentsNameHeaders struct {
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    
}

type GetStudiesIDAttachmentsNameRequest struct {
    PathParams GetStudiesIDAttachmentsNamePathParams 
    Headers GetStudiesIDAttachmentsNameHeaders 
    
}

type GetStudiesIDAttachmentsNameResponse struct {
    ContentType string 
    GetStudiesIDAttachmentsName200ApplicationJSONAny *interface{} 
    Headers map[string][]string 
    StatusCode int64 
    
}

