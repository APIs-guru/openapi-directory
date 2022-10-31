package operations



type GetPatientsIDAttachmentsNameDataPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetPatientsIDAttachmentsNameDataHeaders struct {
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    
}

type GetPatientsIDAttachmentsNameDataRequest struct {
    PathParams GetPatientsIDAttachmentsNameDataPathParams 
    Headers GetPatientsIDAttachmentsNameDataHeaders 
    
}

type GetPatientsIDAttachmentsNameDataResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

