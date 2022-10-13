package shared

type VpnGatewayInfo struct {
	DisplayName  *string `json:"displayName"`
	IPAddress    *string `json:"ipAddress"`
	NetworkURI   *string `json:"networkUri"`
	Region       *string `json:"region"`
	URI          *string `json:"uri"`
	VpnTunnelURI *string `json:"vpnTunnelUri"`
}
