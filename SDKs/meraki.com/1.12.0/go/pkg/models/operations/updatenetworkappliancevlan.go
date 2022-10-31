package operations



type UpdateNetworkApplianceVlanPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    VlanID string `pathParam:"style=simple,explode=false,name=vlanId"`
    
}


type UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum string

const (
    UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnumRunADhcpServer UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum = "Run a DHCP server"
UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnumRelayDhcpToAnotherServer UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum = "Relay DHCP to another server"
UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnumDoNotRespondToDhcpRequests UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum = "Do not respond to DHCP requests"
)



type UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum string

const (
    UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnumThirtyMinutes UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum = "30 minutes"
UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnumOneHour UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum = "1 hour"
UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnumFourHours UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum = "4 hours"
UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnumTwelveHours UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum = "12 hours"
UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnumOneDay UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum = "1 day"
UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnumOneWeek UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum = "1 week"
)



type UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum string

const (
    UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumText UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum = "text"
UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumIP UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum = "ip"
UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumHex UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum = "hex"
UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumInteger UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum = "integer"
)


type UpdateNetworkApplianceVlanRequestBodyDhcpOptions struct {
    Code string `json:"code"`
    Type UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum `json:"type"`
    Value string `json:"value"`
    
}

type UpdateNetworkApplianceVlanRequestBodyReservedIPRanges struct {
    Comment string `json:"comment"`
    End string `json:"end"`
    Start string `json:"start"`
    
}

type UpdateNetworkApplianceVlanRequestBody struct {
    ApplianceIP *string `json:"applianceIp,omitempty"`
    DhcpBootFilename *string `json:"dhcpBootFilename,omitempty"`
    DhcpBootNextServer *string `json:"dhcpBootNextServer,omitempty"`
    DhcpBootOptionsEnabled *bool `json:"dhcpBootOptionsEnabled,omitempty"`
    DhcpHandling *UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum `json:"dhcpHandling,omitempty"`
    DhcpLeaseTime *UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum `json:"dhcpLeaseTime,omitempty"`
    DhcpOptions []UpdateNetworkApplianceVlanRequestBodyDhcpOptions `json:"dhcpOptions,omitempty"`
    DhcpRelayServerIps []string `json:"dhcpRelayServerIps,omitempty"`
    DNSNameservers *string `json:"dnsNameservers,omitempty"`
    FixedIPAssignments map[string]interface{} `json:"fixedIpAssignments,omitempty"`
    GroupPolicyID *string `json:"groupPolicyId,omitempty"`
    Name *string `json:"name,omitempty"`
    ReservedIPRanges []UpdateNetworkApplianceVlanRequestBodyReservedIPRanges `json:"reservedIpRanges,omitempty"`
    Subnet *string `json:"subnet,omitempty"`
    VpnNatSubnet *string `json:"vpnNatSubnet,omitempty"`
    
}

type UpdateNetworkApplianceVlanRequest struct {
    PathParams UpdateNetworkApplianceVlanPathParams 
    Request *UpdateNetworkApplianceVlanRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkApplianceVlanResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkApplianceVlan200ApplicationJSONObject map[string]interface{} 
    
}

