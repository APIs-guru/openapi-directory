import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TcpRouteRouteDestination } from "./tcprouteroutedestination";


// TcpRouteRouteAction
/** 
 * The specifications for routing traffic and applying associated policies.
**/
export class TcpRouteRouteAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations", elemType: shared.TcpRouteRouteDestination })
  destinations?: TcpRouteRouteDestination[];

  @Metadata({ data: "json, name=originalDestination" })
  originalDestination?: boolean;
}
