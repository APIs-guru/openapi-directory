package operations



type RegistrationsWikisListPathParams struct {
    RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
    
}

type RegistrationsWikisListRequest struct {
    PathParams RegistrationsWikisListPathParams 
    
}

type RegistrationsWikisListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

