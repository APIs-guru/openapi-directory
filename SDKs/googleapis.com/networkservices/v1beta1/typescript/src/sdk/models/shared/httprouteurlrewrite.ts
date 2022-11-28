import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpRouteUrlRewrite
/** 
 * The specification for modifying the URL of the request, prior to forwarding the request to the destination.
**/
export class HttpRouteUrlRewrite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostRewrite" })
  hostRewrite?: string;

  @SpeakeasyMetadata({ data: "json, name=pathPrefixRewrite" })
  pathPrefixRewrite?: string;
}
