package operations



type RegistrationsContributorsListPathParams struct {
    RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
    
}

type RegistrationsContributorsListRequest struct {
    PathParams RegistrationsContributorsListPathParams 
    
}

type RegistrationsContributorsListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

