package operations



type DeleteFirewallsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteFirewallsIDRequest struct {
    PathParams DeleteFirewallsIDPathParams 
    
}

type DeleteFirewallsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

