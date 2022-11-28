import { SpeakeasyBase } from "../../../internal/utils";
import { RrSetRoutingPolicyLoadBalancerTarget } from "./rrsetroutingpolicyloadbalancertarget";
/**
 * HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response.
**/
export declare class RrSetRoutingPolicyHealthCheckTargets extends SpeakeasyBase {
    internalLoadBalancers?: RrSetRoutingPolicyLoadBalancerTarget[];
}
