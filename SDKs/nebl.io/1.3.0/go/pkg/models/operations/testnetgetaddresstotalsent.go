package operations



type TestnetGetAddressTotalSentPathParams struct {
    Address string `pathParam:"style=simple,explode=false,name=address"`
    
}

type TestnetGetAddressTotalSentRequest struct {
    PathParams TestnetGetAddressTotalSentPathParams 
    
}

type TestnetGetAddressTotalSentResponse struct {
    ContentType string 
    StatusCode int64 
    GetAddressTotalSentResponse *float64 
    
}

