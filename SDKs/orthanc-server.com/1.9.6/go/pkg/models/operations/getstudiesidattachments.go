package operations



type GetStudiesIDAttachmentsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetStudiesIDAttachmentsRequest struct {
    PathParams GetStudiesIDAttachmentsPathParams 
    
}

type GetStudiesIDAttachmentsResponse struct {
    ContentType string 
    GetStudiesIDAttachments200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

