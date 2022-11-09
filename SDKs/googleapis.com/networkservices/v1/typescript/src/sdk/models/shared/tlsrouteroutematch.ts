import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TlsRouteRouteMatch
/** 
 * RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "AND"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.
**/
export class TlsRouteRouteMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=alpn" })
  alpn?: string[];

  @Metadata({ data: "json, name=sniHost" })
  sniHost?: string[];
}
