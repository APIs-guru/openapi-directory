package operations



type GetNetworkSwitchAccessPoliciesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSwitchAccessPoliciesRequest struct {
    PathParams GetNetworkSwitchAccessPoliciesPathParams 
    
}

type GetNetworkSwitchAccessPoliciesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSwitchAccessPolicies200ApplicationJSONObject map[string]interface{} 
    
}

