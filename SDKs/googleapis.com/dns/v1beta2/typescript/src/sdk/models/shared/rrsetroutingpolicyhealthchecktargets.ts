import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RrSetRoutingPolicyLoadBalancerTarget } from "./rrsetroutingpolicyloadbalancertarget";



// RrSetRoutingPolicyHealthCheckTargets
/** 
 * HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response.
**/
export class RrSetRoutingPolicyHealthCheckTargets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=internalLoadBalancers", elemType: RrSetRoutingPolicyLoadBalancerTarget })
  internalLoadBalancers?: RrSetRoutingPolicyLoadBalancerTarget[];
}
