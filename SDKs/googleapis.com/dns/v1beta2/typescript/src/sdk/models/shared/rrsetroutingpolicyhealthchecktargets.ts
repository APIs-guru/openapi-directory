import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RrSetRoutingPolicyLoadBalancerTarget } from "./rrsetroutingpolicyloadbalancertarget";


// RrSetRoutingPolicyHealthCheckTargets
/** 
 * HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response.
**/
export class RrSetRoutingPolicyHealthCheckTargets extends SpeakeasyBase {
  @Metadata({ data: "json, name=internalLoadBalancers", elemType: shared.RrSetRoutingPolicyLoadBalancerTarget })
  internalLoadBalancers?: RrSetRoutingPolicyLoadBalancerTarget[];
}
