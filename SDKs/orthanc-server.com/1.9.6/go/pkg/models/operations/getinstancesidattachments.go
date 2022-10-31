package operations



type GetInstancesIDAttachmentsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetInstancesIDAttachmentsRequest struct {
    PathParams GetInstancesIDAttachmentsPathParams 
    
}

type GetInstancesIDAttachmentsResponse struct {
    ContentType string 
    GetInstancesIDAttachments200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

