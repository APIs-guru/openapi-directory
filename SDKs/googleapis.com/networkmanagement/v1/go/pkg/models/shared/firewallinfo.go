package shared

type FirewallInfoFirewallRuleTypeEnum string

const (
	FirewallInfoFirewallRuleTypeEnumFirewallRuleTypeUnspecified            FirewallInfoFirewallRuleTypeEnum = "FIREWALL_RULE_TYPE_UNSPECIFIED"
	FirewallInfoFirewallRuleTypeEnumHierarchicalFirewallPolicyRule         FirewallInfoFirewallRuleTypeEnum = "HIERARCHICAL_FIREWALL_POLICY_RULE"
	FirewallInfoFirewallRuleTypeEnumVpcFirewallRule                        FirewallInfoFirewallRuleTypeEnum = "VPC_FIREWALL_RULE"
	FirewallInfoFirewallRuleTypeEnumImpliedVpcFirewallRule                 FirewallInfoFirewallRuleTypeEnum = "IMPLIED_VPC_FIREWALL_RULE"
	FirewallInfoFirewallRuleTypeEnumServerlessVpcAccessManagedFirewallRule FirewallInfoFirewallRuleTypeEnum = "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE"
	FirewallInfoFirewallRuleTypeEnumNetworkFirewallPolicyRule              FirewallInfoFirewallRuleTypeEnum = "NETWORK_FIREWALL_POLICY_RULE"
)

type FirewallInfo struct {
	Action                *string                           `json:"action"`
	Direction             *string                           `json:"direction"`
	DisplayName           *string                           `json:"displayName"`
	FirewallRuleType      *FirewallInfoFirewallRuleTypeEnum `json:"firewallRuleType"`
	NetworkURI            *string                           `json:"networkUri"`
	Policy                *string                           `json:"policy"`
	Priority              *int32                            `json:"priority"`
	TargetServiceAccounts []string                          `json:"targetServiceAccounts"`
	TargetTags            []string                          `json:"targetTags"`
	URI                   *string                           `json:"uri"`
}
