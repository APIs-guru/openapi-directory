package operations



type GetSeriesIDAttachmentsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSeriesIDAttachmentsRequest struct {
    PathParams GetSeriesIDAttachmentsPathParams 
    
}

type GetSeriesIDAttachmentsResponse struct {
    ContentType string 
    GetSeriesIDAttachments200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

