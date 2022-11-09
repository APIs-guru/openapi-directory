import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpRouteUrlRewrite
/** 
 * The specification for modifying the URL of the request, prior to forwarding the request to the destination.
**/
export class HttpRouteUrlRewrite extends SpeakeasyBase {
  @Metadata({ data: "json, name=hostRewrite" })
  hostRewrite?: string;

  @Metadata({ data: "json, name=pathPrefixRewrite" })
  pathPrefixRewrite?: string;
}
