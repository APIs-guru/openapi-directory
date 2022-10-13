package operations

type UpdateDeviceManagementInterfacePathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum string

const (
	UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnumEnabled       UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum = "enabled"
	UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnumDisabled      UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum = "disabled"
	UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnumNotConfigured UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum = "not configured"
)

type UpdateDeviceManagementInterfaceRequestBodyWan1 struct {
	StaticDNS        []string                                                      `json:"staticDns"`
	StaticGatewayIP  *string                                                       `json:"staticGatewayIp"`
	StaticIP         *string                                                       `json:"staticIp"`
	StaticSubnetMask *string                                                       `json:"staticSubnetMask"`
	UsingStaticIP    *bool                                                         `json:"usingStaticIp"`
	Vlan             *int64                                                        `json:"vlan"`
	WanEnabled       *UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum `json:"wanEnabled"`
}

type UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum string

const (
	UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnumEnabled       UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum = "enabled"
	UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnumDisabled      UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum = "disabled"
	UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnumNotConfigured UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum = "not configured"
)

type UpdateDeviceManagementInterfaceRequestBodyWan2 struct {
	StaticDNS        []string                                                      `json:"staticDns"`
	StaticGatewayIP  *string                                                       `json:"staticGatewayIp"`
	StaticIP         *string                                                       `json:"staticIp"`
	StaticSubnetMask *string                                                       `json:"staticSubnetMask"`
	UsingStaticIP    *bool                                                         `json:"usingStaticIp"`
	Vlan             *int64                                                        `json:"vlan"`
	WanEnabled       *UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum `json:"wanEnabled"`
}

type UpdateDeviceManagementInterfaceRequestBody struct {
	Wan1 *UpdateDeviceManagementInterfaceRequestBodyWan1 `json:"wan1"`
	Wan2 *UpdateDeviceManagementInterfaceRequestBodyWan2 `json:"wan2"`
}

type UpdateDeviceManagementInterfaceRequest struct {
	PathParams UpdateDeviceManagementInterfacePathParams
	Request    *UpdateDeviceManagementInterfaceRequestBody `request:"mediaType=application/json"`
}

type UpdateDeviceManagementInterfaceResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	UpdateDeviceManagementInterface200ApplicationJSONObject map[string]interface{}
}
