import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LoadBalancerBackendHealthCheckFirewallStateEnum {
    HealthCheckFirewallStateUnspecified = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED"
,    Configured = "CONFIGURED"
,    Misconfigured = "MISCONFIGURED"
}


// LoadBalancerBackend
/** 
 * For display only. Metadata associated with a specific load balancer backend.
**/
export class LoadBalancerBackend extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=healthCheckAllowingFirewallRules" })
  healthCheckAllowingFirewallRules?: string[];

  @Metadata({ data: "json, name=healthCheckBlockingFirewallRules" })
  healthCheckBlockingFirewallRules?: string[];

  @Metadata({ data: "json, name=healthCheckFirewallState" })
  healthCheckFirewallState?: LoadBalancerBackendHealthCheckFirewallStateEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
