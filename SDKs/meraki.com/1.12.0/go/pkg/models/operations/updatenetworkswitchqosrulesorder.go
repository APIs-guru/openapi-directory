package operations



type UpdateNetworkSwitchQosRulesOrderPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type UpdateNetworkSwitchQosRulesOrderRequestBody struct {
    RuleIds []string `json:"ruleIds"`
    
}

type UpdateNetworkSwitchQosRulesOrderRequest struct {
    PathParams UpdateNetworkSwitchQosRulesOrderPathParams 
    Request UpdateNetworkSwitchQosRulesOrderRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkSwitchQosRulesOrderResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkSwitchQosRulesOrder200ApplicationJSONObject map[string]interface{} 
    
}

