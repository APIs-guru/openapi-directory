import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LoadBalancerBackendHealthCheckFirewallStateEnum {
    HealthCheckFirewallStateUnspecified = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
    Configured = "CONFIGURED",
    Misconfigured = "MISCONFIGURED"
}
/**
 * For display only. Metadata associated with a specific load balancer backend.
**/
export declare class LoadBalancerBackend extends SpeakeasyBase {
    displayName?: string;
    healthCheckAllowingFirewallRules?: string[];
    healthCheckBlockingFirewallRules?: string[];
    healthCheckFirewallState?: LoadBalancerBackendHealthCheckFirewallStateEnum;
    uri?: string;
}
