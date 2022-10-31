package operations



type RegistrationsReadPathParams struct {
    RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
    
}

type RegistrationsReadRequest struct {
    PathParams RegistrationsReadPathParams 
    
}

type RegistrationsReadResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

