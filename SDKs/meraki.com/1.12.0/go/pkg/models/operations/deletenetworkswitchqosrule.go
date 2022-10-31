package operations



type DeleteNetworkSwitchQosRulePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    QosRuleID string `pathParam:"style=simple,explode=false,name=qosRuleId"`
    
}

type DeleteNetworkSwitchQosRuleRequest struct {
    PathParams DeleteNetworkSwitchQosRulePathParams 
    
}

type DeleteNetworkSwitchQosRuleResponse struct {
    ContentType string 
    StatusCode int64 
    
}

