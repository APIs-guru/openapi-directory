package operations



type UpdateNetworkSwitchRoutingMulticastPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings struct {
    FloodUnknownMulticastTrafficEnabled *bool `json:"floodUnknownMulticastTrafficEnabled,omitempty"`
    IgmpSnoopingEnabled *bool `json:"igmpSnoopingEnabled,omitempty"`
    
}

type UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides struct {
    FloodUnknownMulticastTrafficEnabled bool `json:"floodUnknownMulticastTrafficEnabled"`
    IgmpSnoopingEnabled bool `json:"igmpSnoopingEnabled"`
    Stacks []string `json:"stacks,omitempty"`
    SwitchProfiles []string `json:"switchProfiles,omitempty"`
    Switches []string `json:"switches,omitempty"`
    
}

type UpdateNetworkSwitchRoutingMulticastRequestBody struct {
    DefaultSettings *UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings `json:"defaultSettings,omitempty"`
    Overrides []UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides `json:"overrides,omitempty"`
    
}

type UpdateNetworkSwitchRoutingMulticastRequest struct {
    PathParams UpdateNetworkSwitchRoutingMulticastPathParams 
    Request *UpdateNetworkSwitchRoutingMulticastRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkSwitchRoutingMulticastResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkSwitchRoutingMulticast200ApplicationJSONObject map[string]interface{} 
    
}

