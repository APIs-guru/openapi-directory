package shared

type LoadBalancerBackendHealthCheckFirewallStateEnum string

const (
	LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified LoadBalancerBackendHealthCheckFirewallStateEnum = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED"
	LoadBalancerBackendHealthCheckFirewallStateEnumConfigured                          LoadBalancerBackendHealthCheckFirewallStateEnum = "CONFIGURED"
	LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured                       LoadBalancerBackendHealthCheckFirewallStateEnum = "MISCONFIGURED"
)

// LoadBalancerBackend
// For display only. Metadata associated with a specific load balancer backend.
type LoadBalancerBackend struct {
	DisplayName                      *string                                          `json:"displayName,omitempty"`
	HealthCheckAllowingFirewallRules []string                                         `json:"healthCheckAllowingFirewallRules,omitempty"`
	HealthCheckBlockingFirewallRules []string                                         `json:"healthCheckBlockingFirewallRules,omitempty"`
	HealthCheckFirewallState         *LoadBalancerBackendHealthCheckFirewallStateEnum `json:"healthCheckFirewallState,omitempty"`
	URI                              *string                                          `json:"uri,omitempty"`
}
