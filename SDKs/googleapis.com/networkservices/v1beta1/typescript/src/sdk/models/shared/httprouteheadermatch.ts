import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpRouteHeaderMatchIntegerRange } from "./httprouteheadermatchintegerrange";


// HttpRouteHeaderMatch
/** 
 * Specifies how to select a route rule based on HTTP request headers.
**/
export class HttpRouteHeaderMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=exactMatch" })
  exactMatch?: string;

  @Metadata({ data: "json, name=header" })
  header?: string;

  @Metadata({ data: "json, name=invertMatch" })
  invertMatch?: boolean;

  @Metadata({ data: "json, name=prefixMatch" })
  prefixMatch?: string;

  @Metadata({ data: "json, name=presentMatch" })
  presentMatch?: boolean;

  @Metadata({ data: "json, name=rangeMatch" })
  rangeMatch?: HttpRouteHeaderMatchIntegerRange;

  @Metadata({ data: "json, name=regexMatch" })
  regexMatch?: string;

  @Metadata({ data: "json, name=suffixMatch" })
  suffixMatch?: string;
}
