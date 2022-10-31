package operations



type UpdateNetworkSwitchAlternateManagementInterfacePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}


type UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum string

const (
    UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnumRadius UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum = "radius"
UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnumSnmp UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum = "snmp"
UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnumSyslog UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum = "syslog"
)


type UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches struct {
    AlternateManagementIP string `json:"alternateManagementIp"`
    Serial string `json:"serial"`
    
}

type UpdateNetworkSwitchAlternateManagementInterfaceRequestBody struct {
    Enabled *bool `json:"enabled,omitempty"`
    Protocols []UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum `json:"protocols,omitempty"`
    Switches []UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches `json:"switches,omitempty"`
    VlanID *int64 `json:"vlanId,omitempty"`
    
}

type UpdateNetworkSwitchAlternateManagementInterfaceRequest struct {
    PathParams UpdateNetworkSwitchAlternateManagementInterfacePathParams 
    Request *UpdateNetworkSwitchAlternateManagementInterfaceRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkSwitchAlternateManagementInterfaceResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkSwitchAlternateManagementInterface200ApplicationJSONObject map[string]interface{} 
    
}

