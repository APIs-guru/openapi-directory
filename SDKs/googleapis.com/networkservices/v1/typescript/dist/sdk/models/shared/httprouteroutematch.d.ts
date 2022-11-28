import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteHeaderMatch } from "./httprouteheadermatch";
import { HttpRouteQueryParameterMatch } from "./httproutequeryparametermatch";
/**
 * RouteMatch defines specifications used to match requests. If multiple match types are set, this RouteMatch will match if ALL type of matches are matched.
**/
export declare class HttpRouteRouteMatch extends SpeakeasyBase {
    fullPathMatch?: string;
    headers?: HttpRouteHeaderMatch[];
    ignoreCase?: boolean;
    prefixMatch?: string;
    queryParameters?: HttpRouteQueryParameterMatch[];
    regexMatch?: string;
}
