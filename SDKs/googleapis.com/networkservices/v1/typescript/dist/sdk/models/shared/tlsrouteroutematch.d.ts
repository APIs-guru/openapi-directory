import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "AND"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.
**/
export declare class TlsRouteRouteMatch extends SpeakeasyBase {
    alpn?: string[];
    sniHost?: string[];
}
