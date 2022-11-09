import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GrpcRouteDestination } from "./grpcroutedestination";
import { GrpcRouteFaultInjectionPolicy } from "./grpcroutefaultinjectionpolicy";
import { GrpcRouteRetryPolicy } from "./grpcrouteretrypolicy";


// GrpcRouteRouteAction
/** 
 * Specifies how to route matched traffic.
**/
export class GrpcRouteRouteAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations", elemType: shared.GrpcRouteDestination })
  destinations?: GrpcRouteDestination[];

  @Metadata({ data: "json, name=faultInjectionPolicy" })
  faultInjectionPolicy?: GrpcRouteFaultInjectionPolicy;

  @Metadata({ data: "json, name=retryPolicy" })
  retryPolicy?: GrpcRouteRetryPolicy;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;
}
