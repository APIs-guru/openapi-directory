package operations



type UpdateNetworkApplianceVlansSettingsPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type UpdateNetworkApplianceVlansSettingsRequestBody struct {
    VlansEnabled *bool `json:"vlansEnabled,omitempty"`
    
}

type UpdateNetworkApplianceVlansSettingsRequest struct {
    PathParams UpdateNetworkApplianceVlansSettingsPathParams 
    Request *UpdateNetworkApplianceVlansSettingsRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkApplianceVlansSettingsResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkApplianceVlansSettings200ApplicationJSONObject map[string]interface{} 
    
}

