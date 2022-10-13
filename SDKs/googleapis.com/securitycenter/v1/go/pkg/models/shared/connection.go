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
	DestinationIP   *string                 `json:"destinationIp"`
	DestinationPort *int32                  `json:"destinationPort"`
	Protocol        *ConnectionProtocolEnum `json:"protocol"`
	SourceIP        *string                 `json:"sourceIp"`
	SourcePort      *int32                  `json:"sourcePort"`
}
