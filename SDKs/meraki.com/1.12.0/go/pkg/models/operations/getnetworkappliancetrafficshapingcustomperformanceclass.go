package operations



type GetNetworkApplianceTrafficShapingCustomPerformanceClassPathParams struct {
    CustomPerformanceClassID string `pathParam:"style=simple,explode=false,name=customPerformanceClassId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest struct {
    PathParams GetNetworkApplianceTrafficShapingCustomPerformanceClassPathParams 
    
}

type GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject map[string]interface{} 
    
}

