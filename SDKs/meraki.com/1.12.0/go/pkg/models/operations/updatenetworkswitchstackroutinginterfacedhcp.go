package operations

type UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams struct {
	InterfaceID   string `pathParam:"style=simple,explode=false,name=interfaceId"`
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
}

type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum string

const (
	UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumThirtyMinutes UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "30 minutes"
	UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumOneHour       UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "1 hour"
	UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumFourHours     UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "4 hours"
	UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumTwelveHours   UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "12 hours"
	UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumOneDay        UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "1 day"
	UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumOneWeek       UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "1 week"
)

type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum string

const (
	UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpDisabled UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum = "dhcpDisabled"
	UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpRelay    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum = "dhcpRelay"
	UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpServer   UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum = "dhcpServer"
)

type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum string

const (
	UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumText    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum = "text"
	UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumIP      UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum = "ip"
	UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumInteger UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum = "integer"
	UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumHex     UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum = "hex"
)

type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions struct {
	Code  string                                                                     `json:"code"`
	Type  UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum `json:"type"`
	Value string                                                                     `json:"value"`
}

type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum string

const (
	UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumGooglePublicDNS UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum = "googlePublicDns"
	UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumOpenDNS         UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum = "openDns"
	UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumCustom          UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum = "custom"
)

type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments struct {
	IP   string `json:"ip"`
	Mac  string `json:"mac"`
	Name string `json:"name"`
}

type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges struct {
	Comment *string `json:"comment"`
	End     string  `json:"end"`
	Start   string  `json:"start"`
}

type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody struct {
	BootFileName         *string                                                                          `json:"bootFileName"`
	BootNextServer       *string                                                                          `json:"bootNextServer"`
	BootOptionsEnabled   *bool                                                                            `json:"bootOptionsEnabled"`
	DhcpLeaseTime        *UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum        `json:"dhcpLeaseTime"`
	DhcpMode             *UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum             `json:"dhcpMode"`
	DhcpOptions          []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions             `json:"dhcpOptions"`
	DhcpRelayServerIps   []string                                                                         `json:"dhcpRelayServerIps"`
	DNSCustomNameservers []string                                                                         `json:"dnsCustomNameservers"`
	DNSNameserversOption *UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum `json:"dnsNameserversOption"`
	FixedIPAssignments   []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments      `json:"fixedIpAssignments"`
	ReservedIPRanges     []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges        `json:"reservedIpRanges"`
}

type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest struct {
	PathParams UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams
	Request    *UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse struct {
	ContentType                                                          string
	StatusCode                                                           int64
	UpdateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject map[string]interface{}
}
