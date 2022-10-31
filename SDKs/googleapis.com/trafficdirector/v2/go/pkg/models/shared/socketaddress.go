package shared




type SocketAddressProtocolEnum string

const (
    SocketAddressProtocolEnumTCP SocketAddressProtocolEnum = "TCP"
SocketAddressProtocolEnumUDP SocketAddressProtocolEnum = "UDP"
)


type SocketAddress struct {
    Address *string `json:"address,omitempty"`
    Ipv4Compat *bool `json:"ipv4Compat,omitempty"`
    NamedPort *string `json:"namedPort,omitempty"`
    PortValue *int64 `json:"portValue,omitempty"`
    Protocol *SocketAddressProtocolEnum `json:"protocol,omitempty"`
    ResolverName *string `json:"resolverName,omitempty"`
    
}

