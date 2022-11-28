import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountsAccountIdPartiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountId" })
  accountId: string;
}


export class GetAccountsAccountIdPartiesHeaders extends SpeakeasyBase {
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


export class GetAccountsAccountIdPartiesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  psuoAuth2Security: shared.SchemePsuoAuth2Security;
}


export class GetAccountsAccountIdPartiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountsAccountIdPartiesPathParams;

  @SpeakeasyMetadata()
  headers: GetAccountsAccountIdPartiesHeaders;

  @SpeakeasyMetadata()
  security: GetAccountsAccountIdPartiesSecurity;
}


export class GetAccountsAccountIdPartiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obReadParty3?: shared.ObReadParty3;

  @SpeakeasyMetadata()
  statusCode: number;
}
