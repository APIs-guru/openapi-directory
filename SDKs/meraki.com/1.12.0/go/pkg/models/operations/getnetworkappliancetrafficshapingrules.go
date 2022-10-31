package operations



type GetNetworkApplianceTrafficShapingRulesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkApplianceTrafficShapingRulesRequest struct {
    PathParams GetNetworkApplianceTrafficShapingRulesPathParams 
    
}

type GetNetworkApplianceTrafficShapingRulesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkApplianceTrafficShapingRules200ApplicationJSONObject map[string]interface{} 
    
}

