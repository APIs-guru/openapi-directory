import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TcpRouteRouteMatch
/** 
 * RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.
**/
export class TcpRouteRouteMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;
}
