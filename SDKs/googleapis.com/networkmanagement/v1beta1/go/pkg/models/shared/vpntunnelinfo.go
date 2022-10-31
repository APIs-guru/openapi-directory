package shared




type VpnTunnelInfoRoutingTypeEnum string

const (
    VpnTunnelInfoRoutingTypeEnumRoutingTypeUnspecified VpnTunnelInfoRoutingTypeEnum = "ROUTING_TYPE_UNSPECIFIED"
VpnTunnelInfoRoutingTypeEnumRouteBased VpnTunnelInfoRoutingTypeEnum = "ROUTE_BASED"
VpnTunnelInfoRoutingTypeEnumPolicyBased VpnTunnelInfoRoutingTypeEnum = "POLICY_BASED"
VpnTunnelInfoRoutingTypeEnumDynamic VpnTunnelInfoRoutingTypeEnum = "DYNAMIC"
)


type VpnTunnelInfo struct {
    DisplayName *string `json:"displayName,omitempty"`
    NetworkURI *string `json:"networkUri,omitempty"`
    Region *string `json:"region,omitempty"`
    RemoteGateway *string `json:"remoteGateway,omitempty"`
    RemoteGatewayIP *string `json:"remoteGatewayIp,omitempty"`
    RoutingType *VpnTunnelInfoRoutingTypeEnum `json:"routingType,omitempty"`
    SourceGateway *string `json:"sourceGateway,omitempty"`
    SourceGatewayIP *string `json:"sourceGatewayIp,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

