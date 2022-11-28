import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateConsentHeaders extends SpeakeasyBase {
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
  psuIpAddress: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" })
  psuIpPort?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" })
  psuUserAgent?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Brand-Logging-Information" })
  tppBrandLoggingInformation?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Explicit-Authorisation-Preferred" })
  tppExplicitAuthorisationPreferred?: boolean;

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


export class CreateConsentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}


export class CreateConsentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateConsentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Consents;

  @SpeakeasyMetadata()
  security: CreateConsentSecurity;
}


export class CreateConsentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error400Ais?: shared.Error400Ais;

  @SpeakeasyMetadata()
  error400NgAis?: shared.Error400NgAis;

  @SpeakeasyMetadata()
  error401Ais?: shared.Error401Ais;

  @SpeakeasyMetadata()
  error401NgAis?: shared.Error401NgAis;

  @SpeakeasyMetadata()
  error403Ais?: shared.Error403Ais;

  @SpeakeasyMetadata()
  error403NgAis?: shared.Error403NgAis;

  @SpeakeasyMetadata()
  error404Ais?: shared.Error404Ais;

  @SpeakeasyMetadata()
  error404NgAis?: shared.Error404NgAis;

  @SpeakeasyMetadata()
  error405Ais?: shared.Error405Ais;

  @SpeakeasyMetadata()
  error405NgAis?: shared.Error405NgAis;

  @SpeakeasyMetadata()
  error406Ais?: shared.Error406Ais;

  @SpeakeasyMetadata()
  error406NgAis?: shared.Error406NgAis;

  @SpeakeasyMetadata()
  error409Ais?: shared.Error409Ais;

  @SpeakeasyMetadata()
  error409NgAis?: shared.Error409NgAis;

  @SpeakeasyMetadata()
  error429Ais?: shared.Error429Ais;

  @SpeakeasyMetadata()
  error429NgAis?: shared.Error429NgAis;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  consentsResponse201?: shared.ConsentsResponse201;
}
