package shared




type FirewallInfoFirewallRuleTypeEnum string

const (
    FirewallInfoFirewallRuleTypeEnumFirewallRuleTypeUnspecified FirewallInfoFirewallRuleTypeEnum = "FIREWALL_RULE_TYPE_UNSPECIFIED"
FirewallInfoFirewallRuleTypeEnumHierarchicalFirewallPolicyRule FirewallInfoFirewallRuleTypeEnum = "HIERARCHICAL_FIREWALL_POLICY_RULE"
FirewallInfoFirewallRuleTypeEnumVpcFirewallRule FirewallInfoFirewallRuleTypeEnum = "VPC_FIREWALL_RULE"
FirewallInfoFirewallRuleTypeEnumImpliedVpcFirewallRule FirewallInfoFirewallRuleTypeEnum = "IMPLIED_VPC_FIREWALL_RULE"
FirewallInfoFirewallRuleTypeEnumServerlessVpcAccessManagedFirewallRule FirewallInfoFirewallRuleTypeEnum = "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE"
FirewallInfoFirewallRuleTypeEnumNetworkFirewallPolicyRule FirewallInfoFirewallRuleTypeEnum = "NETWORK_FIREWALL_POLICY_RULE"
)


type FirewallInfo struct {
    Action *string `json:"action,omitempty"`
    Direction *string `json:"direction,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    FirewallRuleType *FirewallInfoFirewallRuleTypeEnum `json:"firewallRuleType,omitempty"`
    NetworkURI *string `json:"networkUri,omitempty"`
    Policy *string `json:"policy,omitempty"`
    Priority *int32 `json:"priority,omitempty"`
    TargetServiceAccounts []string `json:"targetServiceAccounts,omitempty"`
    TargetTags []string `json:"targetTags,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

