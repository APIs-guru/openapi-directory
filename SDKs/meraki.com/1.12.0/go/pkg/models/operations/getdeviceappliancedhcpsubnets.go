package operations



type GetDeviceApplianceDhcpSubnetsPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type GetDeviceApplianceDhcpSubnetsRequest struct {
    PathParams GetDeviceApplianceDhcpSubnetsPathParams 
    
}

type GetDeviceApplianceDhcpSubnetsResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceApplianceDhcpSubnets200ApplicationJSONObject map[string]interface{} 
    
}

