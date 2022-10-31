package operations



type GetPatientsIDAttachmentsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetPatientsIDAttachmentsRequest struct {
    PathParams GetPatientsIDAttachmentsPathParams 
    
}

type GetPatientsIDAttachmentsResponse struct {
    ContentType string 
    GetPatientsIDAttachments200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

