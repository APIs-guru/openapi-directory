package operations



type GetAddressUnconfirmedBalancePathParams struct {
    Address string `pathParam:"style=simple,explode=false,name=address"`
    
}

type GetAddressUnconfirmedBalanceRequest struct {
    PathParams GetAddressUnconfirmedBalancePathParams 
    
}

type GetAddressUnconfirmedBalanceResponse struct {
    ContentType string 
    StatusCode int64 
    GetAddressUnconfirmedBalanceResponse *float64 
    
}

