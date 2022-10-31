package operations



type GetNetworkAppliancePortPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    PortID string `pathParam:"style=simple,explode=false,name=portId"`
    
}

type GetNetworkAppliancePortRequest struct {
    PathParams GetNetworkAppliancePortPathParams 
    
}

type GetNetworkAppliancePortResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkAppliancePort200ApplicationJSONObject map[string]interface{} 
    
}

