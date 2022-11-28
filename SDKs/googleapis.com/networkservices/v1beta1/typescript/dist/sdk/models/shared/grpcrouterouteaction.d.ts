import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcRouteDestination } from "./grpcroutedestination";
import { GrpcRouteFaultInjectionPolicy } from "./grpcroutefaultinjectionpolicy";
import { GrpcRouteRetryPolicy } from "./grpcrouteretrypolicy";
/**
 * Specifies how to route matched traffic.
**/
export declare class GrpcRouteRouteAction extends SpeakeasyBase {
    destinations?: GrpcRouteDestination[];
    faultInjectionPolicy?: GrpcRouteFaultInjectionPolicy;
    retryPolicy?: GrpcRouteRetryPolicy;
    timeout?: string;
}
