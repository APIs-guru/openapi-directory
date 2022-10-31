package operations



type UsersAddonAccountsReadPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=account_id"`
    Provider string `pathParam:"style=simple,explode=false,name=provider"`
    UserID string `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type UsersAddonAccountsReadRequest struct {
    PathParams UsersAddonAccountsReadPathParams 
    
}

type UsersAddonAccountsReadResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

