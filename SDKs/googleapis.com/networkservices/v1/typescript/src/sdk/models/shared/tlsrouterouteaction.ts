import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TlsRouteRouteDestination } from "./tlsrouteroutedestination";


// TlsRouteRouteAction
/** 
 * The specifications for routing traffic and applying associated policies.
**/
export class TlsRouteRouteAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations", elemType: shared.TlsRouteRouteDestination })
  destinations?: TlsRouteRouteDestination[];
}
