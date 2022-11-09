import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWaAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=external_id" })
  externalId: string;
}


export class GetWaAccountSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetWaAccountSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetWaAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetWaAccountSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetWaAccountSecurityOption2;
}


export class GetWaAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWaAccountPathParams;

  @Metadata()
  security: GetWaAccountSecurity;
}


export class GetWaAccountResponse extends SpeakeasyBase {
  @Metadata()
  fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  waAccountResponse?: shared.WaAccountResponse;
}
