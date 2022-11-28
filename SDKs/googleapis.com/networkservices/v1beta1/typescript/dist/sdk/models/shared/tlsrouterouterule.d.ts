import { SpeakeasyBase } from "../../../internal/utils";
import { TlsRouteRouteAction } from "./tlsrouterouteaction";
import { TlsRouteRouteMatch } from "./tlsrouteroutematch";
/**
 * Specifies how to match traffic and how to route traffic when traffic is matched.
**/
export declare class TlsRouteRouteRule extends SpeakeasyBase {
    action?: TlsRouteRouteAction;
    matches?: TlsRouteRouteMatch[];
}
