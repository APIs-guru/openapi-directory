package operations



type RegistrationsContributorsReadPathParams struct {
    RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
    UserID string `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type RegistrationsContributorsReadRequest struct {
    PathParams RegistrationsContributorsReadPathParams 
    
}

type RegistrationsContributorsReadResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

