package operations



type DeleteNetworkPiiRequestPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    RequestID string `pathParam:"style=simple,explode=false,name=requestId"`
    
}

type DeleteNetworkPiiRequestRequest struct {
    PathParams DeleteNetworkPiiRequestPathParams 
    
}

type DeleteNetworkPiiRequestResponse struct {
    ContentType string 
    StatusCode int64 
    
}

