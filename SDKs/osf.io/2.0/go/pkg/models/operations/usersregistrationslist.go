package operations



type UsersRegistrationsListPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type UsersRegistrationsListRequest struct {
    PathParams UsersRegistrationsListPathParams 
    
}

type UsersRegistrationsListResponse struct {
    ContentType string 
    StatusCode int64 
    
}

