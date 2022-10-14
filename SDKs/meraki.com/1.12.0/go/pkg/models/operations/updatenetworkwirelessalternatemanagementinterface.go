package operations

type UpdateNetworkWirelessAlternateManagementInterfacePathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints struct {
	AlternateManagementIP string  `json:"alternateManagementIp"`
	Dns1                  *string `json:"dns1,omitempty"`
	Dns2                  *string `json:"dns2,omitempty"`
	Gateway               *string `json:"gateway,omitempty"`
	Serial                string  `json:"serial"`
	SubnetMask            *string `json:"subnetMask,omitempty"`
}

type UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum string

const (
	UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnumRadius UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum = "radius"
	UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnumSnmp   UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum = "snmp"
	UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnumSyslog UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum = "syslog"
	UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnumLdap   UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum = "ldap"
)

type UpdateNetworkWirelessAlternateManagementInterfaceRequestBody struct {
	AccessPoints []UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints  `json:"accessPoints,omitempty"`
	Enabled      *bool                                                                       `json:"enabled,omitempty"`
	Protocols    []UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum `json:"protocols,omitempty"`
	VlanID       *int64                                                                      `json:"vlanId,omitempty"`
}

type UpdateNetworkWirelessAlternateManagementInterfaceRequest struct {
	PathParams UpdateNetworkWirelessAlternateManagementInterfacePathParams
	Request    *UpdateNetworkWirelessAlternateManagementInterfaceRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkWirelessAlternateManagementInterfaceResponse struct {
	ContentType                                                               string
	StatusCode                                                                int64
	UpdateNetworkWirelessAlternateManagementInterface200ApplicationJSONObject map[string]interface{}
}
