package operations



type GetPatientsIDAttachmentsNamePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetPatientsIDAttachmentsNameHeaders struct {
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    
}

type GetPatientsIDAttachmentsNameRequest struct {
    PathParams GetPatientsIDAttachmentsNamePathParams 
    Headers GetPatientsIDAttachmentsNameHeaders 
    
}

type GetPatientsIDAttachmentsNameResponse struct {
    ContentType string 
    GetPatientsIDAttachmentsName200ApplicationJSONAny *interface{} 
    Headers map[string][]string 
    StatusCode int64 
    
}

