import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account-id" })
  accountId: string;
}


export class GetTransactionListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bookingStatus" })
  bookingStatus: shared.BookingStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateFrom" })
  dateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateTo" })
  dateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deltaList" })
  deltaList?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryReferenceFrom" })
  entryReferenceFrom?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=withBalance" })
  withBalance?: boolean;
}


export class GetTransactionListHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Consent-ID" })
  consentId: string;

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


export class GetTransactionListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}


export class GetTransactionListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransactionListPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTransactionListQueryParams;

  @SpeakeasyMetadata()
  headers: GetTransactionListHeaders;

  @SpeakeasyMetadata()
  security: GetTransactionListSecurity;
}


export class GetTransactionListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

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
  transactionsResponse200Json?: shared.TransactionsResponse200Json;
}
