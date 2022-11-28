import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteDestination } from "./httproutedestination";
/**
 * Specifies the policy on how requests are shadowed to a separate mirrored destination service. The proxy does not wait for responses from the shadow service. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow.
**/
export declare class HttpRouteRequestMirrorPolicy extends SpeakeasyBase {
    destination?: HttpRouteDestination;
}
