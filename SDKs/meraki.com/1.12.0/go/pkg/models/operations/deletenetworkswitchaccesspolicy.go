package operations



type DeleteNetworkSwitchAccessPolicyPathParams struct {
    AccessPolicyNumber string `pathParam:"style=simple,explode=false,name=accessPolicyNumber"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type DeleteNetworkSwitchAccessPolicyRequest struct {
    PathParams DeleteNetworkSwitchAccessPolicyPathParams 
    
}

type DeleteNetworkSwitchAccessPolicyResponse struct {
    ContentType string 
    StatusCode int64 
    
}

