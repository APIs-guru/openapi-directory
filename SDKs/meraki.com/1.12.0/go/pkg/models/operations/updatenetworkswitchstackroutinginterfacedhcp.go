package operations



type UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams struct {
    InterfaceID string `pathParam:"style=simple,explode=false,name=interfaceId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
    
}


type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum string

const (
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumThirtyMinutes UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "30 minutes"
UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumOneHour UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "1 hour"
UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumFourHours UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "4 hours"
UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumTwelveHours UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "12 hours"
UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumOneDay UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "1 day"
UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumOneWeek UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = "1 week"
)



type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum string

const (
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpDisabled UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum = "dhcpDisabled"
UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpRelay UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum = "dhcpRelay"
UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpServer UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum = "dhcpServer"
)



type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum string

const (
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumText UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum = "text"
UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumIP UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum = "ip"
UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumInteger UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum = "integer"
UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumHex UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum = "hex"
)


type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions struct {
    Code string `json:"code"`
    Type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum `json:"type"`
    Value string `json:"value"`
    
}


type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum string

const (
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumGooglePublicDNS UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum = "googlePublicDns"
UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumOpenDNS UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum = "openDns"
UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumCustom UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum = "custom"
)


type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments struct {
    IP string `json:"ip"`
    Mac string `json:"mac"`
    Name string `json:"name"`
    
}

type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges struct {
    Comment *string `json:"comment,omitempty"`
    End string `json:"end"`
    Start string `json:"start"`
    
}

type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody struct {
    BootFileName *string `json:"bootFileName,omitempty"`
    BootNextServer *string `json:"bootNextServer,omitempty"`
    BootOptionsEnabled *bool `json:"bootOptionsEnabled,omitempty"`
    DhcpLeaseTime *UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum `json:"dhcpLeaseTime,omitempty"`
    DhcpMode *UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum `json:"dhcpMode,omitempty"`
    DhcpOptions []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions `json:"dhcpOptions,omitempty"`
    DhcpRelayServerIps []string `json:"dhcpRelayServerIps,omitempty"`
    DNSCustomNameservers []string `json:"dnsCustomNameservers,omitempty"`
    DNSNameserversOption *UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum `json:"dnsNameserversOption,omitempty"`
    FixedIPAssignments []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments `json:"fixedIpAssignments,omitempty"`
    ReservedIPRanges []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges `json:"reservedIpRanges,omitempty"`
    
}

type UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest struct {
    PathParams UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams 
    Request *UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject map[string]interface{} 
    
}

