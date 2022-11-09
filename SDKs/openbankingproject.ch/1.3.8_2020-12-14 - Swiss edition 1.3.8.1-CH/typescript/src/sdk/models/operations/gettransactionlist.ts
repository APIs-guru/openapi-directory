import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account-id" })
  accountId: string;
}


export class GetTransactionListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bookingStatus" })
  bookingStatus: shared.BookingStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateFrom" })
  dateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateTo" })
  dateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deltaList" })
  deltaList?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entryReferenceFrom" })
  entryReferenceFrom?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=withBalance" })
  withBalance?: boolean;
}


export class GetTransactionListHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Consent-ID" })
  consentId: string;

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


export class GetTransactionListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}


export class GetTransactionListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionListPathParams;

  @Metadata()
  queryParams: GetTransactionListQueryParams;

  @Metadata()
  headers: GetTransactionListHeaders;

  @Metadata()
  security: GetTransactionListSecurity;
}


export class GetTransactionListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error400Ais?: shared.Error400Ais;

  @Metadata()
  error400NgAis?: shared.Error400NgAis;

  @Metadata()
  error401Ais?: shared.Error401Ais;

  @Metadata()
  error401NgAis?: shared.Error401NgAis;

  @Metadata()
  error403Ais?: shared.Error403Ais;

  @Metadata()
  error403NgAis?: shared.Error403NgAis;

  @Metadata()
  error404Ais?: shared.Error404Ais;

  @Metadata()
  error404NgAis?: shared.Error404NgAis;

  @Metadata()
  error405Ais?: shared.Error405Ais;

  @Metadata()
  error405NgAis?: shared.Error405NgAis;

  @Metadata()
  error406Ais?: shared.Error406Ais;

  @Metadata()
  error406NgAis?: shared.Error406NgAis;

  @Metadata()
  error409Ais?: shared.Error409Ais;

  @Metadata()
  error409NgAis?: shared.Error409NgAis;

  @Metadata()
  error429Ais?: shared.Error429Ais;

  @Metadata()
  error429NgAis?: shared.Error429NgAis;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  transactionsResponse200Json?: shared.TransactionsResponse200Json;
}
