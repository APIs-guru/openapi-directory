package operations



type UpdateDeviceManagementInterfacePathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}


type UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum string

const (
    UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnumEnabled UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum = "enabled"
UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnumDisabled UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum = "disabled"
UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnumNotConfigured UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum = "not configured"
)


type UpdateDeviceManagementInterfaceRequestBodyWan1 struct {
    StaticDNS []string `json:"staticDns,omitempty"`
    StaticGatewayIP *string `json:"staticGatewayIp,omitempty"`
    StaticIP *string `json:"staticIp,omitempty"`
    StaticSubnetMask *string `json:"staticSubnetMask,omitempty"`
    UsingStaticIP *bool `json:"usingStaticIp,omitempty"`
    Vlan *int64 `json:"vlan,omitempty"`
    WanEnabled *UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum `json:"wanEnabled,omitempty"`
    
}


type UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum string

const (
    UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnumEnabled UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum = "enabled"
UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnumDisabled UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum = "disabled"
UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnumNotConfigured UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum = "not configured"
)


type UpdateDeviceManagementInterfaceRequestBodyWan2 struct {
    StaticDNS []string `json:"staticDns,omitempty"`
    StaticGatewayIP *string `json:"staticGatewayIp,omitempty"`
    StaticIP *string `json:"staticIp,omitempty"`
    StaticSubnetMask *string `json:"staticSubnetMask,omitempty"`
    UsingStaticIP *bool `json:"usingStaticIp,omitempty"`
    Vlan *int64 `json:"vlan,omitempty"`
    WanEnabled *UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum `json:"wanEnabled,omitempty"`
    
}

type UpdateDeviceManagementInterfaceRequestBody struct {
    Wan1 *UpdateDeviceManagementInterfaceRequestBodyWan1 `json:"wan1,omitempty"`
    Wan2 *UpdateDeviceManagementInterfaceRequestBodyWan2 `json:"wan2,omitempty"`
    
}

type UpdateDeviceManagementInterfaceRequest struct {
    PathParams UpdateDeviceManagementInterfacePathParams 
    Request *UpdateDeviceManagementInterfaceRequestBody `request:"mediaType=application/json"`
    
}

type UpdateDeviceManagementInterfaceResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateDeviceManagementInterface200ApplicationJSONObject map[string]interface{} 
    
}

