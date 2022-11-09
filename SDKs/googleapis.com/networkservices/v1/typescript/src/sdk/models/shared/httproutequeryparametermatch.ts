import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpRouteQueryParameterMatch
/** 
 * Specifications to match a query parameter in the request.
**/
export class HttpRouteQueryParameterMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=exactMatch" })
  exactMatch?: string;

  @Metadata({ data: "json, name=presentMatch" })
  presentMatch?: boolean;

  @Metadata({ data: "json, name=queryParameter" })
  queryParameter?: string;

  @Metadata({ data: "json, name=regexMatch" })
  regexMatch?: string;
}
