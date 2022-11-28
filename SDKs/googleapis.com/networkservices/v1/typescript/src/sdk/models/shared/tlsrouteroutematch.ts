import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TlsRouteRouteMatch
/** 
 * RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "AND"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.
**/
export class TlsRouteRouteMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alpn" })
  alpn?: string[];

  @SpeakeasyMetadata({ data: "json, name=sniHost" })
  sniHost?: string[];
}
