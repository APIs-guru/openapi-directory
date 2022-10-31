package operations



type GetNetworkApplianceVlansPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkApplianceVlansRequest struct {
    PathParams GetNetworkApplianceVlansPathParams 
    
}

type GetNetworkApplianceVlansResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkApplianceVlans200ApplicationJSONObject map[string]interface{} 
    
}

