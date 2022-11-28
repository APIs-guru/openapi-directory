import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteHeaderMatch } from "./httprouteheadermatch";
import { HttpRouteQueryParameterMatch } from "./httproutequeryparametermatch";



// HttpRouteRouteMatch
/** 
 * RouteMatch defines specifications used to match requests. If multiple match types are set, this RouteMatch will match if ALL type of matches are matched.
**/
export class HttpRouteRouteMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullPathMatch" })
  fullPathMatch?: string;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: HttpRouteHeaderMatch })
  headers?: HttpRouteHeaderMatch[];

  @SpeakeasyMetadata({ data: "json, name=ignoreCase" })
  ignoreCase?: boolean;

  @SpeakeasyMetadata({ data: "json, name=prefixMatch" })
  prefixMatch?: string;

  @SpeakeasyMetadata({ data: "json, name=queryParameters", elemType: HttpRouteQueryParameterMatch })
  queryParameters?: HttpRouteQueryParameterMatch[];

  @SpeakeasyMetadata({ data: "json, name=regexMatch" })
  regexMatch?: string;
}
