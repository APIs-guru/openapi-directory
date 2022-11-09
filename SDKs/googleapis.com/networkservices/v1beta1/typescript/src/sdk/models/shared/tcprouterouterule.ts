import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TcpRouteRouteAction } from "./tcprouterouteaction";
import { TcpRouteRouteMatch } from "./tcprouteroutematch";


// TcpRouteRouteRule
/** 
 * Specifies how to match traffic and how to route traffic when traffic is matched.
**/
export class TcpRouteRouteRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: TcpRouteRouteAction;

  @Metadata({ data: "json, name=matches", elemType: shared.TcpRouteRouteMatch })
  matches?: TcpRouteRouteMatch[];
}
