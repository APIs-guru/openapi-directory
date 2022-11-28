import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TlsRouteRouteDestination } from "./tlsrouteroutedestination";



// TlsRouteRouteAction
/** 
 * The specifications for routing traffic and applying associated policies.
**/
export class TlsRouteRouteAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: TlsRouteRouteDestination })
  destinations?: TlsRouteRouteDestination[];
}
