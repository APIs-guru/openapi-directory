package operations



type RegistrationsLogsListPathParams struct {
    RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
    
}

type RegistrationsLogsListRequest struct {
    PathParams RegistrationsLogsListPathParams 
    
}

type RegistrationsLogsListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

