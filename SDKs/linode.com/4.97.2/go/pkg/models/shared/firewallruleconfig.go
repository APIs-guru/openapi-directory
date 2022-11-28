package shared

type FirewallRuleConfigActionEnum string

const (
	FirewallRuleConfigActionEnumAccept FirewallRuleConfigActionEnum = "ACCEPT"
	FirewallRuleConfigActionEnumDrop   FirewallRuleConfigActionEnum = "DROP"
)

// FirewallRuleConfigAddresses
// Allowed IPv4 or IPv6 addresses. A Rule can have up to 255 addresses or networks listed across its IPv4 and IPv6 arrays. A network and a single IP are treated as equivalent when accounting for this limit.
type FirewallRuleConfigAddresses struct {
	Ipv4 []string `json:"ipv4,omitempty"`
	Ipv6 []string `json:"ipv6,omitempty"`
}

type FirewallRuleConfigProtocolEnum string

const (
	FirewallRuleConfigProtocolEnumTCP  FirewallRuleConfigProtocolEnum = "TCP"
	FirewallRuleConfigProtocolEnumUDP  FirewallRuleConfigProtocolEnum = "UDP"
	FirewallRuleConfigProtocolEnumIcmp FirewallRuleConfigProtocolEnum = "ICMP"
)

// FirewallRuleConfig
// One of a Firewall's inbound or outbound access rules. The `ports` property can be used to allow traffic on a comma-separated list of different ports.
type FirewallRuleConfig struct {
	Action      *FirewallRuleConfigActionEnum  `json:"action,omitempty"`
	Addresses   *FirewallRuleConfigAddresses   `json:"addresses,omitempty"`
	Description *string                        `json:"description,omitempty"`
	Label       *string                        `json:"label,omitempty"`
	Ports       *string                        `json:"ports,omitempty"`
	Protocol    FirewallRuleConfigProtocolEnum `json:"protocol"`
}
