import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HttpRouteRedirectResponseCodeEnum {
    ResponseCodeUnspecified = "RESPONSE_CODE_UNSPECIFIED"
,    MovedPermanentlyDefault = "MOVED_PERMANENTLY_DEFAULT"
,    Found = "FOUND"
,    SeeOther = "SEE_OTHER"
,    TemporaryRedirect = "TEMPORARY_REDIRECT"
,    PermanentRedirect = "PERMANENT_REDIRECT"
}


// HttpRouteRedirect
/** 
 * The specification for redirecting traffic.
**/
export class HttpRouteRedirect extends SpeakeasyBase {
  @Metadata({ data: "json, name=hostRedirect" })
  hostRedirect?: string;

  @Metadata({ data: "json, name=httpsRedirect" })
  httpsRedirect?: boolean;

  @Metadata({ data: "json, name=pathRedirect" })
  pathRedirect?: string;

  @Metadata({ data: "json, name=portRedirect" })
  portRedirect?: number;

  @Metadata({ data: "json, name=prefixRewrite" })
  prefixRewrite?: string;

  @Metadata({ data: "json, name=responseCode" })
  responseCode?: HttpRouteRedirectResponseCodeEnum;

  @Metadata({ data: "json, name=stripQuery" })
  stripQuery?: boolean;
}
