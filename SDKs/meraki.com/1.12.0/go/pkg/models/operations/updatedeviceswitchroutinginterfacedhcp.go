package operations

type UpdateDeviceSwitchRoutingInterfaceDhcpPathParams struct {
	InterfaceID string `pathParam:"style=simple,explode=false,name=interfaceId"`
	Serial      string `pathParam:"style=simple,explode=false,name=serial"`
}

type UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum string

const (
	UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumThirtyMinutes UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "30 minutes"
	UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumOneHour       UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "1 hour"
	UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumFourHours     UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "4 hours"
	UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumTwelveHours   UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "12 hours"
	UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumOneDay        UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "1 day"
	UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumOneWeek       UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "1 week"
)

type UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum string

const (
	UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpDisabled UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum = "dhcpDisabled"
	UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpRelay    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum = "dhcpRelay"
	UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpServer   UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum = "dhcpServer"
)

type UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum string

const (
	UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumText    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum = "text"
	UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumIP      UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum = "ip"
	UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumInteger UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum = "integer"
	UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumHex     UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum = "hex"
)

type UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions struct {
	Code  string                                                               `json:"code"`
	Type  UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum `json:"type"`
	Value string                                                               `json:"value"`
}

type UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum string

const (
	UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumGooglePublicDNS UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum = "googlePublicDns"
	UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumOpenDNS         UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum = "openDns"
	UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumCustom          UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum = "custom"
)

type UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments struct {
	IP   string `json:"ip"`
	Mac  string `json:"mac"`
	Name string `json:"name"`
}

type UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges struct {
	Comment *string `json:"comment,omitempty"`
	End     string  `json:"end"`
	Start   string  `json:"start"`
}

type UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody struct {
	BootFileName         *string                                                                    `json:"bootFileName,omitempty"`
	BootNextServer       *string                                                                    `json:"bootNextServer,omitempty"`
	BootOptionsEnabled   *bool                                                                      `json:"bootOptionsEnabled,omitempty"`
	DhcpLeaseTime        *UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum        `json:"dhcpLeaseTime,omitempty"`
	DhcpMode             *UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum             `json:"dhcpMode,omitempty"`
	DhcpOptions          []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions             `json:"dhcpOptions,omitempty"`
	DhcpRelayServerIps   []string                                                                   `json:"dhcpRelayServerIps,omitempty"`
	DNSCustomNameservers []string                                                                   `json:"dnsCustomNameservers,omitempty"`
	DNSNameserversOption *UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum `json:"dnsNameserversOption,omitempty"`
	FixedIPAssignments   []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments      `json:"fixedIpAssignments,omitempty"`
	ReservedIPRanges     []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges        `json:"reservedIpRanges,omitempty"`
}

type UpdateDeviceSwitchRoutingInterfaceDhcpRequest struct {
	PathParams UpdateDeviceSwitchRoutingInterfaceDhcpPathParams
	Request    *UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody `request:"mediaType=application/json"`
}

type UpdateDeviceSwitchRoutingInterfaceDhcpResponse struct {
	ContentType                                                    string
	StatusCode                                                     int64
	UpdateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject map[string]interface{}
}
