package operations



type UsersInstitutionsListPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type UsersInstitutionsListRequest struct {
    PathParams UsersInstitutionsListPathParams 
    
}

type UsersInstitutionsListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

