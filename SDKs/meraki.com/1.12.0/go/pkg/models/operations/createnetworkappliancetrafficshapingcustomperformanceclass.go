package operations



type CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody struct {
    MaxJitter *int64 `json:"maxJitter,omitempty"`
    MaxLatency *int64 `json:"maxLatency,omitempty"`
    MaxLossPercentage *int64 `json:"maxLossPercentage,omitempty"`
    Name string `json:"name"`
    
}

type CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest struct {
    PathParams CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams 
    Request CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody `request:"mediaType=application/json"`
    
}

type CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse struct {
    ContentType string 
    StatusCode int64 
    CreateNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJSONObject map[string]interface{} 
    
}

