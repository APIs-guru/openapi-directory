import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpRouteQueryParameterMatch
/** 
 * Specifications to match a query parameter in the request.
**/
export class HttpRouteQueryParameterMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exactMatch" })
  exactMatch?: string;

  @SpeakeasyMetadata({ data: "json, name=presentMatch" })
  presentMatch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=queryParameter" })
  queryParameter?: string;

  @SpeakeasyMetadata({ data: "json, name=regexMatch" })
  regexMatch?: string;
}
