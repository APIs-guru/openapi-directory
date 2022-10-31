package operations



type TestnetGetAddressUnconfirmedBalancePathParams struct {
    Address string `pathParam:"style=simple,explode=false,name=address"`
    
}

type TestnetGetAddressUnconfirmedBalanceRequest struct {
    PathParams TestnetGetAddressUnconfirmedBalancePathParams 
    
}

type TestnetGetAddressUnconfirmedBalanceResponse struct {
    ContentType string 
    StatusCode int64 
    GetAddressUnconfirmedBalanceResponse *float64 
    
}

