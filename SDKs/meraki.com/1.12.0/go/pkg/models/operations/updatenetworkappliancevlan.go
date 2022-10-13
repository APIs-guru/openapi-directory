package operations

type UpdateNetworkApplianceVlanPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	VlanID    string `pathParam:"style=simple,explode=false,name=vlanId"`
}

type UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum string

const (
	UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnumRunADhcpServer             UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum = "Run a DHCP server"
	UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnumRelayDhcpToAnotherServer   UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum = "Relay DHCP to another server"
	UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnumDoNotRespondToDhcpRequests UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum = "Do not respond to DHCP requests"
)

type UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum string

const (
	UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnumThirtyMinutes UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum = "30 minutes"
	UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnumOneHour       UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum = "1 hour"
	UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnumFourHours     UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum = "4 hours"
	UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnumTwelveHours   UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum = "12 hours"
	UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnumOneDay        UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum = "1 day"
	UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnumOneWeek       UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum = "1 week"
)

type UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum string

const (
	UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumText    UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum = "text"
	UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumIP      UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum = "ip"
	UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumHex     UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum = "hex"
	UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumInteger UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum = "integer"
)

type UpdateNetworkApplianceVlanRequestBodyDhcpOptions struct {
	Code  string                                                   `json:"code"`
	Type  UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum `json:"type"`
	Value string                                                   `json:"value"`
}

type UpdateNetworkApplianceVlanRequestBodyReservedIPRanges struct {
	Comment string `json:"comment"`
	End     string `json:"end"`
	Start   string `json:"start"`
}

type UpdateNetworkApplianceVlanRequestBody struct {
	ApplianceIP            *string                                                 `json:"applianceIp"`
	DhcpBootFilename       *string                                                 `json:"dhcpBootFilename"`
	DhcpBootNextServer     *string                                                 `json:"dhcpBootNextServer"`
	DhcpBootOptionsEnabled *bool                                                   `json:"dhcpBootOptionsEnabled"`
	DhcpHandling           *UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum  `json:"dhcpHandling"`
	DhcpLeaseTime          *UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum `json:"dhcpLeaseTime"`
	DhcpOptions            []UpdateNetworkApplianceVlanRequestBodyDhcpOptions      `json:"dhcpOptions"`
	DhcpRelayServerIps     []string                                                `json:"dhcpRelayServerIps"`
	DNSNameservers         *string                                                 `json:"dnsNameservers"`
	FixedIPAssignments     map[string]interface{}                                  `json:"fixedIpAssignments"`
	GroupPolicyID          *string                                                 `json:"groupPolicyId"`
	Name                   *string                                                 `json:"name"`
	ReservedIPRanges       []UpdateNetworkApplianceVlanRequestBodyReservedIPRanges `json:"reservedIpRanges"`
	Subnet                 *string                                                 `json:"subnet"`
	VpnNatSubnet           *string                                                 `json:"vpnNatSubnet"`
}

type UpdateNetworkApplianceVlanRequest struct {
	PathParams UpdateNetworkApplianceVlanPathParams
	Request    *UpdateNetworkApplianceVlanRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkApplianceVlanResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	UpdateNetworkApplianceVlan200ApplicationJSONObject map[string]interface{}
}
