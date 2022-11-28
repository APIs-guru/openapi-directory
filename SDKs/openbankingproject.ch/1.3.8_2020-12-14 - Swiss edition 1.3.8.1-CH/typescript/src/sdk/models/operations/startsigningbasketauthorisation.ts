import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartSigningBasketAuthorisationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=basketId" })
  basketId: string;
}


export class StartSigningBasketAuthorisationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" })
  digest?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept" })
  psuAccept?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" })
  psuAcceptCharset?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" })
  psuAcceptEncoding?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" })
  psuAcceptLanguage?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID" })
  psuCorporateId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID-Type" })
  psuCorporateIdType?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" })
  psuDeviceId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" })
  psuGeoLocation?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" })
  psuHttpMethod?: shared.PsuHttpMethodEnum;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-ID" })
  psuId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-ID-Type" })
  psuIdType?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" })
  psuIpAddress?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" })
  psuIpPort?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" })
  psuUserAgent?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Nok-Redirect-URI" })
  tppNokRedirectUri?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Notification-Content-Preferred" })
  tppNotificationContentPreferred?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Notification-URI" })
  tppNotificationUri?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-Preferred" })
  tppRedirectPreferred?: boolean;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-URI" })
  tppRedirectUri?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" })
  tppSignatureCertificate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" })
  xRequestId: string;
}


export class StartSigningBasketAuthorisationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}


export class StartSigningBasketAuthorisationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StartSigningBasketAuthorisationPathParams;

  @SpeakeasyMetadata()
  headers: StartSigningBasketAuthorisationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: StartSigningBasketAuthorisationSecurity;
}


export class StartSigningBasketAuthorisationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error400NgSbs?: shared.Error400NgSbs;

  @SpeakeasyMetadata()
  error400Sbs?: shared.Error400Sbs;

  @SpeakeasyMetadata()
  error401NgSbs?: shared.Error401NgSbs;

  @SpeakeasyMetadata()
  error401Sbs?: shared.Error401Sbs;

  @SpeakeasyMetadata()
  error403NgSbs?: shared.Error403NgSbs;

  @SpeakeasyMetadata()
  error403Sbs?: shared.Error403Sbs;

  @SpeakeasyMetadata()
  error404NgSbs?: shared.Error404NgSbs;

  @SpeakeasyMetadata()
  error404Sbs?: shared.Error404Sbs;

  @SpeakeasyMetadata()
  error405NgSbs?: shared.Error405NgSbs;

  @SpeakeasyMetadata()
  error405Sbs?: shared.Error405Sbs;

  @SpeakeasyMetadata()
  error409NgSbs?: shared.Error409NgSbs;

  @SpeakeasyMetadata()
  error409Sbs?: shared.Error409Sbs;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  startScaprocessResponse?: shared.StartScaprocessResponse;
}
