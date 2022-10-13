package operations

type UpdateNetworkWirelessSsidVpnPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

type UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum string

const (
	UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnumAny UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum = "Any"
	UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnumTCP UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum = "TCP"
	UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnumUDP UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum = "UDP"
)

type UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules struct {
	Comment  *string                                                              `json:"comment"`
	DestCidr string                                                               `json:"destCidr"`
	DestPort *string                                                              `json:"destPort"`
	Policy   string                                                               `json:"policy"`
	Protocol *UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum `json:"protocol"`
}

type UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel struct {
	Enabled *bool                                                     `json:"enabled"`
	Rules   []UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules `json:"rules"`
}

type UpdateNetworkWirelessSsidVpnRequestBody struct {
	SplitTunnel *UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel `json:"splitTunnel"`
}

type UpdateNetworkWirelessSsidVpnRequest struct {
	PathParams UpdateNetworkWirelessSsidVpnPathParams
	Request    *UpdateNetworkWirelessSsidVpnRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkWirelessSsidVpnResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	UpdateNetworkWirelessSsidVpn200ApplicationJSONObject map[string]interface{}
}
