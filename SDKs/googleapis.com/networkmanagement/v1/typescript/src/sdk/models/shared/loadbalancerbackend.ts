import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LoadBalancerBackendHealthCheckFirewallStateEnum {
    HealthCheckFirewallStateUnspecified = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
    Configured = "CONFIGURED",
    Misconfigured = "MISCONFIGURED"
}


// LoadBalancerBackend
/** 
 * For display only. Metadata associated with a specific load balancer backend.
**/
export class LoadBalancerBackend extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=healthCheckAllowingFirewallRules" })
  healthCheckAllowingFirewallRules?: string[];

  @SpeakeasyMetadata({ data: "json, name=healthCheckBlockingFirewallRules" })
  healthCheckBlockingFirewallRules?: string[];

  @SpeakeasyMetadata({ data: "json, name=healthCheckFirewallState" })
  healthCheckFirewallState?: LoadBalancerBackendHealthCheckFirewallStateEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
