package operations



type UsersAddonsListPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type UsersAddonsListRequest struct {
    PathParams UsersAddonsListPathParams 
    
}

type UsersAddonsListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

