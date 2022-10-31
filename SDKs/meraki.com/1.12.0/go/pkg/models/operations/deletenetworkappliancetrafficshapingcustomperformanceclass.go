package operations



type DeleteNetworkApplianceTrafficShapingCustomPerformanceClassPathParams struct {
    CustomPerformanceClassID string `pathParam:"style=simple,explode=false,name=customPerformanceClassId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest struct {
    PathParams DeleteNetworkApplianceTrafficShapingCustomPerformanceClassPathParams 
    
}

type DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse struct {
    ContentType string 
    StatusCode int64 
    
}

