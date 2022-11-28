import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteHeaderMatchIntegerRange } from "./httprouteheadermatchintegerrange";



// HttpRouteHeaderMatch
/** 
 * Specifies how to select a route rule based on HTTP request headers.
**/
export class HttpRouteHeaderMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exactMatch" })
  exactMatch?: string;

  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: string;

  @SpeakeasyMetadata({ data: "json, name=invertMatch" })
  invertMatch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=prefixMatch" })
  prefixMatch?: string;

  @SpeakeasyMetadata({ data: "json, name=presentMatch" })
  presentMatch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rangeMatch" })
  rangeMatch?: HttpRouteHeaderMatchIntegerRange;

  @SpeakeasyMetadata({ data: "json, name=regexMatch" })
  regexMatch?: string;

  @SpeakeasyMetadata({ data: "json, name=suffixMatch" })
  suffixMatch?: string;
}
