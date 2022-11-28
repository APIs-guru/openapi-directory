import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSigningBasketPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=basketId" })
  basketId: string;
}


export class DeleteSigningBasketHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" })
  psuDeviceId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" })
  psuGeoLocation?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" })
  psuHttpMethod?: shared.PsuHttpMethodEnum;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" })
  psuIpAddress?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" })
  psuIpPort?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" })
  psuUserAgent?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" })
  tppSignatureCertificate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" })
  xRequestId: string;
}


export class DeleteSigningBasketSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}


export class DeleteSigningBasketRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSigningBasketPathParams;

  @SpeakeasyMetadata()
  headers: DeleteSigningBasketHeaders;

  @SpeakeasyMetadata()
  security: DeleteSigningBasketSecurity;
}


export class DeleteSigningBasketResponse extends SpeakeasyBase {
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
}
