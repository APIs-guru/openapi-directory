package operations



type GetNetworkSwitchQosRulesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSwitchQosRulesRequest struct {
    PathParams GetNetworkSwitchQosRulesPathParams 
    
}

type GetNetworkSwitchQosRulesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSwitchQosRules200ApplicationJSONObject map[string]interface{} 
    
}

