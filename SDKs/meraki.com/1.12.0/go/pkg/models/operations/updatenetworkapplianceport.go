package operations



type UpdateNetworkAppliancePortPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    PortID string `pathParam:"style=simple,explode=false,name=portId"`
    
}

type UpdateNetworkAppliancePortRequestBody struct {
    AccessPolicy *string `json:"accessPolicy,omitempty"`
    AllowedVlans *string `json:"allowedVlans,omitempty"`
    DropUntaggedTraffic *bool `json:"dropUntaggedTraffic,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    Type *string `json:"type,omitempty"`
    Vlan *int64 `json:"vlan,omitempty"`
    
}

type UpdateNetworkAppliancePortRequest struct {
    PathParams UpdateNetworkAppliancePortPathParams 
    Request *UpdateNetworkAppliancePortRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkAppliancePortResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkAppliancePort200ApplicationJSONObject map[string]interface{} 
    
}

