package operations



type GetNetworkApplianceFirewallCellularFirewallRulesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkApplianceFirewallCellularFirewallRulesRequest struct {
    PathParams GetNetworkApplianceFirewallCellularFirewallRulesPathParams 
    
}

type GetNetworkApplianceFirewallCellularFirewallRulesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject map[string]interface{} 
    
}

