package operations



type GetNetworkSwitchQosRulePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    QosRuleID string `pathParam:"style=simple,explode=false,name=qosRuleId"`
    
}

type GetNetworkSwitchQosRuleRequest struct {
    PathParams GetNetworkSwitchQosRulePathParams 
    
}

type GetNetworkSwitchQosRuleResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSwitchQosRule200ApplicationJSONObject map[string]interface{} 
    
}

