import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrpcRouteDestination } from "./grpcroutedestination";
import { GrpcRouteFaultInjectionPolicy } from "./grpcroutefaultinjectionpolicy";
import { GrpcRouteRetryPolicy } from "./grpcrouteretrypolicy";



// GrpcRouteRouteAction
/** 
 * Specifies how to route matched traffic.
**/
export class GrpcRouteRouteAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: GrpcRouteDestination })
  destinations?: GrpcRouteDestination[];

  @SpeakeasyMetadata({ data: "json, name=faultInjectionPolicy" })
  faultInjectionPolicy?: GrpcRouteFaultInjectionPolicy;

  @SpeakeasyMetadata({ data: "json, name=retryPolicy" })
  retryPolicy?: GrpcRouteRetryPolicy;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;
}
