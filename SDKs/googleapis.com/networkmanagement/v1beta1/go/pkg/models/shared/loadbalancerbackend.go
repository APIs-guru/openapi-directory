package shared

type LoadBalancerBackendHealthCheckFirewallStateEnum string

const (
	LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified LoadBalancerBackendHealthCheckFirewallStateEnum = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED"
	LoadBalancerBackendHealthCheckFirewallStateEnumConfigured                          LoadBalancerBackendHealthCheckFirewallStateEnum = "CONFIGURED"
	LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured                       LoadBalancerBackendHealthCheckFirewallStateEnum = "MISCONFIGURED"
)

type LoadBalancerBackend struct {
	DisplayName                      *string                                          `json:"displayName"`
	HealthCheckAllowingFirewallRules []string                                         `json:"healthCheckAllowingFirewallRules"`
	HealthCheckBlockingFirewallRules []string                                         `json:"healthCheckBlockingFirewallRules"`
	HealthCheckFirewallState         *LoadBalancerBackendHealthCheckFirewallStateEnum `json:"healthCheckFirewallState"`
	URI                              *string                                          `json:"uri"`
}
