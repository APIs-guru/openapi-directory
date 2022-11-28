import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TlsRouteRouteAction } from "./tlsrouterouteaction";
import { TlsRouteRouteMatch } from "./tlsrouteroutematch";



// TlsRouteRouteRule
/** 
 * Specifies how to match traffic and how to route traffic when traffic is matched.
**/
export class TlsRouteRouteRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: TlsRouteRouteAction;

  @SpeakeasyMetadata({ data: "json, name=matches", elemType: TlsRouteRouteMatch })
  matches?: TlsRouteRouteMatch[];
}
