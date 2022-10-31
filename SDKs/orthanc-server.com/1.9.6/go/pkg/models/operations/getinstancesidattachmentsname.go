package operations



type GetInstancesIDAttachmentsNamePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetInstancesIDAttachmentsNameHeaders struct {
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    
}

type GetInstancesIDAttachmentsNameRequest struct {
    PathParams GetInstancesIDAttachmentsNamePathParams 
    Headers GetInstancesIDAttachmentsNameHeaders 
    
}

type GetInstancesIDAttachmentsNameResponse struct {
    ContentType string 
    GetInstancesIDAttachmentsName200ApplicationJSONAny *interface{} 
    Headers map[string][]string 
    StatusCode int64 
    
}

