import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteRouteAction } from "./httprouterouteaction";
import { HttpRouteRouteMatch } from "./httprouteroutematch";



// HttpRouteRouteRule
/** 
 * Specifies how to match traffic and how to route traffic when traffic is matched.
**/
export class HttpRouteRouteRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: HttpRouteRouteAction;

  @SpeakeasyMetadata({ data: "json, name=matches", elemType: HttpRouteRouteMatch })
  matches?: HttpRouteRouteMatch[];
}
