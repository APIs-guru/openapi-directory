package operations



type RegistrationsCommentsListPathParams struct {
    RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
    
}

type RegistrationsCommentsListRequest struct {
    PathParams RegistrationsCommentsListPathParams 
    
}

type RegistrationsCommentsListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

