import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountsAccountIdBeneficiariesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class GetAccountsAccountIdBeneficiariesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=sandbox-id" })
  sandboxId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" })
  xCustomerUserAgent?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" })
  xFapiAuthDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" })
  xFapiCustomerIpAddress?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" })
  xFapiInteractionId?: string;
}


export class GetAccountsAccountIdBeneficiariesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  authorizationCodeToken: shared.SchemeAuthorizationCodeToken;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class GetAccountsAccountIdBeneficiariesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountsAccountIdBeneficiariesPathParams;

  @Metadata()
  headers: GetAccountsAccountIdBeneficiariesHeaders;

  @Metadata()
  security: GetAccountsAccountIdBeneficiariesSecurity;
}


export class GetAccountsAccountIdBeneficiariesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obReadBeneficiary5?: shared.ObReadBeneficiary5;

  @Metadata()
  statusCode: number;
}
