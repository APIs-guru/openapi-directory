import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromBookingDateTime" })
  fromBookingDateTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toBookingDateTime" })
  toBookingDateTime?: Date;
}


export class GetTransactionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" })
  xCustomerUserAgent?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" })
  xFapiAuthDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" })
  xFapiCustomerIpAddress?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" })
  xFapiInteractionId?: string;
}


export class GetTransactionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  psuoAuth2Security: shared.SchemePsuoAuth2Security;
}


export class GetTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTransactionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetTransactionsHeaders;

  @SpeakeasyMetadata()
  security: GetTransactionsSecurity;
}


export class GetTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obReadTransaction6?: shared.ObReadTransaction6;

  @SpeakeasyMetadata()
  statusCode: number;
}
