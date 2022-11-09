import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVsmAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=external_id" })
  externalId: string;
}


export class GetVsmAccountSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetVsmAccountSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetVsmAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetVsmAccountSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetVsmAccountSecurityOption2;
}


export class GetVsmAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVsmAccountPathParams;

  @Metadata()
  security: GetVsmAccountSecurity;
}


export class GetVsmAccountResponse extends SpeakeasyBase {
  @Metadata()
  fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  vsmAccountResponse?: shared.VsmAccountResponse;
}
