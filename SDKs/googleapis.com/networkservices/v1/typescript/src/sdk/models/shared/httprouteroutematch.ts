import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HttpRouteHeaderMatch } from "./httprouteheadermatch";
import { HttpRouteQueryParameterMatch } from "./httproutequeryparametermatch";


// HttpRouteRouteMatch
/** 
 * RouteMatch defines specifications used to match requests. If multiple match types are set, this RouteMatch will match if ALL type of matches are matched.
**/
export class HttpRouteRouteMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullPathMatch" })
  fullPathMatch?: string;

  @Metadata({ data: "json, name=headers", elemType: shared.HttpRouteHeaderMatch })
  headers?: HttpRouteHeaderMatch[];

  @Metadata({ data: "json, name=ignoreCase" })
  ignoreCase?: boolean;

  @Metadata({ data: "json, name=prefixMatch" })
  prefixMatch?: string;

  @Metadata({ data: "json, name=queryParameters", elemType: shared.HttpRouteQueryParameterMatch })
  queryParameters?: HttpRouteQueryParameterMatch[];

  @Metadata({ data: "json, name=regexMatch" })
  regexMatch?: string;
}
