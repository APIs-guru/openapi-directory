package shared

type ConnectionProtocolEnum string

const (
	ConnectionProtocolEnumProtocolUnspecified ConnectionProtocolEnum = "PROTOCOL_UNSPECIFIED"
	ConnectionProtocolEnumIcmp                ConnectionProtocolEnum = "ICMP"
	ConnectionProtocolEnumTCP                 ConnectionProtocolEnum = "TCP"
	ConnectionProtocolEnumUDP                 ConnectionProtocolEnum = "UDP"
	ConnectionProtocolEnumGre                 ConnectionProtocolEnum = "GRE"
	ConnectionProtocolEnumEsp                 ConnectionProtocolEnum = "ESP"
)

type Connection struct {
	DestinationIP   *string                 `json:"destinationIp,omitempty"`
	DestinationPort *int32                  `json:"destinationPort,omitempty"`
	Protocol        *ConnectionProtocolEnum `json:"protocol,omitempty"`
	SourceIP        *string                 `json:"sourceIp,omitempty"`
	SourcePort      *int32                  `json:"sourcePort,omitempty"`
}
