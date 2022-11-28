import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteRouteAction } from "./httprouterouteaction";
import { HttpRouteRouteMatch } from "./httprouteroutematch";
/**
 * Specifies how to match traffic and how to route traffic when traffic is matched.
**/
export declare class HttpRouteRouteRule extends SpeakeasyBase {
    action?: HttpRouteRouteAction;
    matches?: HttpRouteRouteMatch[];
}
