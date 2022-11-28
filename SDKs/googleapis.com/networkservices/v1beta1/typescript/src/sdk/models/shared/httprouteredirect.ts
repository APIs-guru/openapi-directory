import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HttpRouteRedirectResponseCodeEnum {
    ResponseCodeUnspecified = "RESPONSE_CODE_UNSPECIFIED",
    MovedPermanentlyDefault = "MOVED_PERMANENTLY_DEFAULT",
    Found = "FOUND",
    SeeOther = "SEE_OTHER",
    TemporaryRedirect = "TEMPORARY_REDIRECT",
    PermanentRedirect = "PERMANENT_REDIRECT"
}


// HttpRouteRedirect
/** 
 * The specification for redirecting traffic.
**/
export class HttpRouteRedirect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostRedirect" })
  hostRedirect?: string;

  @SpeakeasyMetadata({ data: "json, name=httpsRedirect" })
  httpsRedirect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pathRedirect" })
  pathRedirect?: string;

  @SpeakeasyMetadata({ data: "json, name=portRedirect" })
  portRedirect?: number;

  @SpeakeasyMetadata({ data: "json, name=prefixRewrite" })
  prefixRewrite?: string;

  @SpeakeasyMetadata({ data: "json, name=responseCode" })
  responseCode?: HttpRouteRedirectResponseCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=stripQuery" })
  stripQuery?: boolean;
}
