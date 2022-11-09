import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSigningBasketPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=basketId" })
  basketId: string;
}


export class DeleteSigningBasketHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Digest" })
  digest?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-Accept" })
  psuAccept?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" })
  psuAcceptCharset?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" })
  psuAcceptEncoding?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" })
  psuAcceptLanguage?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" })
  psuDeviceId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" })
  psuGeoLocation?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" })
  psuHttpMethod?: shared.PsuHttpMethodEnum;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" })
  psuIpAddress?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" })
  psuIpPort?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" })
  psuUserAgent?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Signature" })
  signature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" })
  tppSignatureCertificate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Request-ID" })
  xRequestId: string;
}


export class DeleteSigningBasketSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}


export class DeleteSigningBasketRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSigningBasketPathParams;

  @Metadata()
  headers: DeleteSigningBasketHeaders;

  @Metadata()
  security: DeleteSigningBasketSecurity;
}


export class DeleteSigningBasketResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error400NgSbs?: shared.Error400NgSbs;

  @Metadata()
  error400Sbs?: shared.Error400Sbs;

  @Metadata()
  error401NgSbs?: shared.Error401NgSbs;

  @Metadata()
  error401Sbs?: shared.Error401Sbs;

  @Metadata()
  error403NgSbs?: shared.Error403NgSbs;

  @Metadata()
  error403Sbs?: shared.Error403Sbs;

  @Metadata()
  error404NgSbs?: shared.Error404NgSbs;

  @Metadata()
  error404Sbs?: shared.Error404Sbs;

  @Metadata()
  error405NgSbs?: shared.Error405NgSbs;

  @Metadata()
  error405Sbs?: shared.Error405Sbs;

  @Metadata()
  error409NgSbs?: shared.Error409NgSbs;

  @Metadata()
  error409Sbs?: shared.Error409Sbs;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
