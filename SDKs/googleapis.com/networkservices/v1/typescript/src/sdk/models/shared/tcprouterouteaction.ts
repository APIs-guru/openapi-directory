import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TcpRouteRouteDestination } from "./tcprouteroutedestination";



// TcpRouteRouteAction
/** 
 * The specifications for routing traffic and applying associated policies.
**/
export class TcpRouteRouteAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: TcpRouteRouteDestination })
  destinations?: TcpRouteRouteDestination[];

  @SpeakeasyMetadata({ data: "json, name=originalDestination" })
  originalDestination?: boolean;
}
