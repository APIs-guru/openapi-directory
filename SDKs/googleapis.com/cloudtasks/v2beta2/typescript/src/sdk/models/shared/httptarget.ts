import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HeaderOverride } from "./headeroverride";
import { OAuthToken } from "./oauthtoken";
import { OidcToken } from "./oidctoken";
import { UriOverride } from "./urioverride";

export enum HttpTargetHttpMethodEnum {
    HttpMethodUnspecified = "HTTP_METHOD_UNSPECIFIED"
,    Post = "POST"
,    Get = "GET"
,    Head = "HEAD"
,    Put = "PUT"
,    Delete = "DELETE"
,    Patch = "PATCH"
,    Options = "OPTIONS"
}


// HttpTarget
/** 
 * HTTP target. When specified as a Queue, all the tasks with [HttpRequest] will be overridden according to the target.
**/
export class HttpTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=headerOverrides", elemType: shared.HeaderOverride })
  headerOverrides?: HeaderOverride[];

  @Metadata({ data: "json, name=httpMethod" })
  httpMethod?: HttpTargetHttpMethodEnum;

  @Metadata({ data: "json, name=oauthToken" })
  oauthToken?: OAuthToken;

  @Metadata({ data: "json, name=oidcToken" })
  oidcToken?: OidcToken;

  @Metadata({ data: "json, name=uriOverride" })
  uriOverride?: UriOverride;
}
