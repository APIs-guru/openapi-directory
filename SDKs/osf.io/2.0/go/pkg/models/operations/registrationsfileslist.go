package operations



type RegistrationsFilesListPathParams struct {
    Provider string `pathParam:"style=simple,explode=false,name=provider"`
    RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
    
}

type RegistrationsFilesListRequest struct {
    PathParams RegistrationsFilesListPathParams 
    
}

type RegistrationsFilesListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

