package shared

type VpnTunnelInfoRoutingTypeEnum string

const (
	VpnTunnelInfoRoutingTypeEnumRoutingTypeUnspecified VpnTunnelInfoRoutingTypeEnum = "ROUTING_TYPE_UNSPECIFIED"
	VpnTunnelInfoRoutingTypeEnumRouteBased             VpnTunnelInfoRoutingTypeEnum = "ROUTE_BASED"
	VpnTunnelInfoRoutingTypeEnumPolicyBased            VpnTunnelInfoRoutingTypeEnum = "POLICY_BASED"
	VpnTunnelInfoRoutingTypeEnumDynamic                VpnTunnelInfoRoutingTypeEnum = "DYNAMIC"
)

type VpnTunnelInfo struct {
	DisplayName     *string                       `json:"displayName"`
	NetworkURI      *string                       `json:"networkUri"`
	Region          *string                       `json:"region"`
	RemoteGateway   *string                       `json:"remoteGateway"`
	RemoteGatewayIP *string                       `json:"remoteGatewayIp"`
	RoutingType     *VpnTunnelInfoRoutingTypeEnum `json:"routingType"`
	SourceGateway   *string                       `json:"sourceGateway"`
	SourceGatewayIP *string                       `json:"sourceGatewayIp"`
	URI             *string                       `json:"uri"`
}
