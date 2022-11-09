import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TlsRouteRouteAction } from "./tlsrouterouteaction";
import { TlsRouteRouteMatch } from "./tlsrouteroutematch";


// TlsRouteRouteRule
/** 
 * Specifies how to match traffic and how to route traffic when traffic is matched.
**/
export class TlsRouteRouteRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: TlsRouteRouteAction;

  @Metadata({ data: "json, name=matches", elemType: shared.TlsRouteRouteMatch })
  matches?: TlsRouteRouteMatch[];
}
