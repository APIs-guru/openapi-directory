import { SpeakeasyBase } from "../../../internal/utils";
import { TcpRouteRouteAction } from "./tcprouterouteaction";
import { TcpRouteRouteMatch } from "./tcprouteroutematch";
/**
 * Specifies how to match traffic and how to route traffic when traffic is matched.
**/
export declare class TcpRouteRouteRule extends SpeakeasyBase {
    action?: TcpRouteRouteAction;
    matches?: TcpRouteRouteMatch[];
}
