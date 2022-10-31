package shared

type VpnGatewayInfo struct {
	DisplayName  *string `json:"displayName,omitempty"`
	IPAddress    *string `json:"ipAddress,omitempty"`
	NetworkURI   *string `json:"networkUri,omitempty"`
	Region       *string `json:"region,omitempty"`
	URI          *string `json:"uri,omitempty"`
	VpnTunnelURI *string `json:"vpnTunnelUri,omitempty"`
}
