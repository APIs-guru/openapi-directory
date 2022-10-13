package shared

type SocketAddressProtocolEnum string

const (
	SocketAddressProtocolEnumTCP SocketAddressProtocolEnum = "TCP"
	SocketAddressProtocolEnumUDP SocketAddressProtocolEnum = "UDP"
)

type SocketAddress struct {
	Address      *string                    `json:"address"`
	Ipv4Compat   *bool                      `json:"ipv4Compat"`
	NamedPort    *string                    `json:"namedPort"`
	PortValue    *int64                     `json:"portValue"`
	Protocol     *SocketAddressProtocolEnum `json:"protocol"`
	ResolverName *string                    `json:"resolverName"`
}
