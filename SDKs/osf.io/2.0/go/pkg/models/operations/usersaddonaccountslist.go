package operations



type UsersAddonAccountsListPathParams struct {
    Provider string `pathParam:"style=simple,explode=false,name=provider"`
    UserID string `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type UsersAddonAccountsListRequest struct {
    PathParams UsersAddonAccountsListPathParams 
    
}

type UsersAddonAccountsListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

