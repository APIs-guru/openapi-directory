import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HttpRouteRouteAction } from "./httprouterouteaction";
import { HttpRouteRouteMatch } from "./httprouteroutematch";


// HttpRouteRouteRule
/** 
 * Specifies how to match traffic and how to route traffic when traffic is matched.
**/
export class HttpRouteRouteRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: HttpRouteRouteAction;

  @Metadata({ data: "json, name=matches", elemType: shared.HttpRouteRouteMatch })
  matches?: HttpRouteRouteMatch[];
}
