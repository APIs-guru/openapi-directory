package operations



type UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams struct {
    CustomPerformanceClassID string `pathParam:"style=simple,explode=false,name=customPerformanceClassId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody struct {
    MaxJitter *int64 `json:"maxJitter,omitempty"`
    MaxLatency *int64 `json:"maxLatency,omitempty"`
    MaxLossPercentage *int64 `json:"maxLossPercentage,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest struct {
    PathParams UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams 
    Request *UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject map[string]interface{} 
    
}

