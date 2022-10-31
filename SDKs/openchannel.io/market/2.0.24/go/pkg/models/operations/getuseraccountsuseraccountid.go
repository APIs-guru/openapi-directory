package operations



type GetUserAccountsUserAccountIDPathParams struct {
    UserAccountID string `pathParam:"style=simple,explode=false,name=userAccountId"`
    
}

type GetUserAccountsUserAccountIDRequest struct {
    PathParams GetUserAccountsUserAccountIDPathParams 
    
}

type GetUserAccountsUserAccountIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

