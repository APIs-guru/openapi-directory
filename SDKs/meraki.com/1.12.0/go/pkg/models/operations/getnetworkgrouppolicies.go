package operations



type GetNetworkGroupPoliciesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkGroupPoliciesRequest struct {
    PathParams GetNetworkGroupPoliciesPathParams 
    
}

type GetNetworkGroupPoliciesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkGroupPolicies200ApplicationJSONObject map[string]interface{} 
    
}

