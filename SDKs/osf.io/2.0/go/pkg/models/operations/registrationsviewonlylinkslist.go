package operations



type RegistrationsViewOnlyLinksListPathParams struct {
    RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
    
}

type RegistrationsViewOnlyLinksListRequest struct {
    PathParams RegistrationsViewOnlyLinksListPathParams 
    
}

type RegistrationsViewOnlyLinksListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

