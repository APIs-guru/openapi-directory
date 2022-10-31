package operations



type GetAddressTotalSentPathParams struct {
    Address string `pathParam:"style=simple,explode=false,name=address"`
    
}

type GetAddressTotalSentRequest struct {
    PathParams GetAddressTotalSentPathParams 
    
}

type GetAddressTotalSentResponse struct {
    ContentType string 
    StatusCode int64 
    GetAddressTotalSentResponse *float64 
    
}

