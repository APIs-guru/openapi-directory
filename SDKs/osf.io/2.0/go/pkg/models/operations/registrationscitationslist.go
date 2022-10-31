package operations



type RegistrationsCitationsListPathParams struct {
    RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
    
}

type RegistrationsCitationsListRequest struct {
    PathParams RegistrationsCitationsListPathParams 
    
}

type RegistrationsCitationsListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

