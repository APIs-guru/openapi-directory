package shared




type FirewallRuleConfigActionEnum string

const (
    FirewallRuleConfigActionEnumAccept FirewallRuleConfigActionEnum = "ACCEPT"
FirewallRuleConfigActionEnumDrop FirewallRuleConfigActionEnum = "DROP"
)


type FirewallRuleConfigAddresses struct {
    Ipv4 []string `json:"ipv4,omitempty"`
    Ipv6 []string `json:"ipv6,omitempty"`
    
}


type FirewallRuleConfigProtocolEnum string

const (
    FirewallRuleConfigProtocolEnumTCP FirewallRuleConfigProtocolEnum = "TCP"
FirewallRuleConfigProtocolEnumUDP FirewallRuleConfigProtocolEnum = "UDP"
FirewallRuleConfigProtocolEnumIcmp FirewallRuleConfigProtocolEnum = "ICMP"
)


type FirewallRuleConfig struct {
    Action *FirewallRuleConfigActionEnum `json:"action,omitempty"`
    Addresses *FirewallRuleConfigAddresses `json:"addresses,omitempty"`
    Description *string `json:"description,omitempty"`
    Label *string `json:"label,omitempty"`
    Ports *string `json:"ports,omitempty"`
    Protocol FirewallRuleConfigProtocolEnum `json:"protocol"`
    
}

