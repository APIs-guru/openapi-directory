import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TcpRouteRouteAction } from "./tcprouterouteaction";
import { TcpRouteRouteMatch } from "./tcprouteroutematch";



// TcpRouteRouteRule
/** 
 * Specifies how to match traffic and how to route traffic when traffic is matched.
**/
export class TcpRouteRouteRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: TcpRouteRouteAction;

  @SpeakeasyMetadata({ data: "json, name=matches", elemType: TcpRouteRouteMatch })
  matches?: TcpRouteRouteMatch[];
}
