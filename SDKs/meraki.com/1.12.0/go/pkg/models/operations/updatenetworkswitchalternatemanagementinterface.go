package operations

type UpdateNetworkSwitchAlternateManagementInterfacePathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum string

const (
	UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnumRadius UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum = "radius"
	UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnumSnmp   UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum = "snmp"
	UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnumSyslog UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum = "syslog"
)

type UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches struct {
	AlternateManagementIP string `json:"alternateManagementIp"`
	Serial                string `json:"serial"`
}

type UpdateNetworkSwitchAlternateManagementInterfaceRequestBody struct {
	Enabled   *bool                                                                     `json:"enabled"`
	Protocols []UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum `json:"protocols"`
	Switches  []UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches      `json:"switches"`
	VlanID    *int64                                                                    `json:"vlanId"`
}

type UpdateNetworkSwitchAlternateManagementInterfaceRequest struct {
	PathParams UpdateNetworkSwitchAlternateManagementInterfacePathParams
	Request    *UpdateNetworkSwitchAlternateManagementInterfaceRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSwitchAlternateManagementInterfaceResponse struct {
	ContentType                                                             string
	StatusCode                                                              int64
	UpdateNetworkSwitchAlternateManagementInterface200ApplicationJSONObject map[string]interface{}
}
