package operations



type GetNetworkApplianceTrafficShapingUplinkBandwidthPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkApplianceTrafficShapingUplinkBandwidthRequest struct {
    PathParams GetNetworkApplianceTrafficShapingUplinkBandwidthPathParams 
    
}

type GetNetworkApplianceTrafficShapingUplinkBandwidthResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject map[string]interface{} 
    
}

