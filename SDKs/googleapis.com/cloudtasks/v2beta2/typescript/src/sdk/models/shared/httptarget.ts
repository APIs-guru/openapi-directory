import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HeaderOverride } from "./headeroverride";
import { OAuthToken } from "./oauthtoken";
import { OidcToken } from "./oidctoken";
import { UriOverride } from "./urioverride";


export enum HttpTargetHttpMethodEnum {
    HttpMethodUnspecified = "HTTP_METHOD_UNSPECIFIED",
    Post = "POST",
    Get = "GET",
    Head = "HEAD",
    Put = "PUT",
    Delete = "DELETE",
    Patch = "PATCH",
    Options = "OPTIONS"
}


// HttpTarget
/** 
 * HTTP target. When specified as a Queue, all the tasks with [HttpRequest] will be overridden according to the target.
**/
export class HttpTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headerOverrides", elemType: HeaderOverride })
  headerOverrides?: HeaderOverride[];

  @SpeakeasyMetadata({ data: "json, name=httpMethod" })
  httpMethod?: HttpTargetHttpMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=oauthToken" })
  oauthToken?: OAuthToken;

  @SpeakeasyMetadata({ data: "json, name=oidcToken" })
  oidcToken?: OidcToken;

  @SpeakeasyMetadata({ data: "json, name=uriOverride" })
  uriOverride?: UriOverride;
}
