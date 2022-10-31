package operations



type UpdateNetworkApplianceSingleLanPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type UpdateNetworkApplianceSingleLanRequestBody struct {
    ApplianceIP *string `json:"applianceIp,omitempty"`
    Subnet *string `json:"subnet,omitempty"`
    
}

type UpdateNetworkApplianceSingleLanRequest struct {
    PathParams UpdateNetworkApplianceSingleLanPathParams 
    Request *UpdateNetworkApplianceSingleLanRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkApplianceSingleLanResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkApplianceSingleLan200ApplicationJSONObject map[string]interface{} 
    
}

