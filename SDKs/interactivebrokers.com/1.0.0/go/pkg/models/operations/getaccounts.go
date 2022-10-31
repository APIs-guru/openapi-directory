package operations



type GetAccountsQueryParams struct {
    Account string `queryParam:"style=form,explode=true,name=account"`
    
}

type GetAccountsRequest struct {
    QueryParams GetAccountsQueryParams 
    
}

type GetAccounts200ApplicationJSON struct {
    Accounts []string `json:"accounts,omitempty"`
    
}

type GetAccountsResponse struct {
    ContentType string 
    GetAccounts200ApplicationJSONObject *GetAccounts200ApplicationJSON 
    StatusCode int64 
    
}

