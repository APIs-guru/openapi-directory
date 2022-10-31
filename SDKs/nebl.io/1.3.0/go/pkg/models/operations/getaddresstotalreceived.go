package operations



type GetAddressTotalReceivedPathParams struct {
    Address string `pathParam:"style=simple,explode=false,name=address"`
    
}

type GetAddressTotalReceivedRequest struct {
    PathParams GetAddressTotalReceivedPathParams 
    
}

type GetAddressTotalReceivedResponse struct {
    ContentType string 
    StatusCode int64 
    GetAddressTotalReceivedResponse *float64 
    
}

