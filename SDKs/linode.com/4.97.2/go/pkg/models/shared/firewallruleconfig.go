package shared

type FirewallRuleConfigActionEnum string

const (
	FirewallRuleConfigActionEnumAccept FirewallRuleConfigActionEnum = "ACCEPT"
	FirewallRuleConfigActionEnumDrop   FirewallRuleConfigActionEnum = "DROP"
)

type FirewallRuleConfigAddresses struct {
	Ipv4 []string `json:"ipv4"`
	Ipv6 []string `json:"ipv6"`
}

type FirewallRuleConfigProtocolEnum string

const (
	FirewallRuleConfigProtocolEnumTCP  FirewallRuleConfigProtocolEnum = "TCP"
	FirewallRuleConfigProtocolEnumUDP  FirewallRuleConfigProtocolEnum = "UDP"
	FirewallRuleConfigProtocolEnumIcmp FirewallRuleConfigProtocolEnum = "ICMP"
)

type FirewallRuleConfig struct {
	Action      *FirewallRuleConfigActionEnum  `json:"action"`
	Addresses   *FirewallRuleConfigAddresses   `json:"addresses"`
	Description *string                        `json:"description"`
	Label       *string                        `json:"label"`
	Ports       *string                        `json:"ports"`
	Protocol    FirewallRuleConfigProtocolEnum `json:"protocol"`
}
