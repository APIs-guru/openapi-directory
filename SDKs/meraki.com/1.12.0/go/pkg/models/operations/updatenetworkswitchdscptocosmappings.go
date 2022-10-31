package operations



type UpdateNetworkSwitchDscpToCosMappingsPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings struct {
    Cos int64 `json:"cos"`
    Dscp int64 `json:"dscp"`
    Title *string `json:"title,omitempty"`
    
}

type UpdateNetworkSwitchDscpToCosMappingsRequestBody struct {
    Mappings []UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings `json:"mappings"`
    
}

type UpdateNetworkSwitchDscpToCosMappingsRequest struct {
    PathParams UpdateNetworkSwitchDscpToCosMappingsPathParams 
    Request UpdateNetworkSwitchDscpToCosMappingsRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkSwitchDscpToCosMappingsResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkSwitchDscpToCosMappings200ApplicationJSONObject map[string]interface{} 
    
}

