package operations



type GetNetworkApplianceWarmSparePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkApplianceWarmSpareRequest struct {
    PathParams GetNetworkApplianceWarmSparePathParams 
    
}

type GetNetworkApplianceWarmSpareResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkApplianceWarmSpare200ApplicationJSONObject map[string]interface{} 
    
}

