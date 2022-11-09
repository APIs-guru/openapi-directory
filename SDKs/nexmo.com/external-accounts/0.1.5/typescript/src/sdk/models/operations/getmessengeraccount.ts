import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMessengerAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=external_id" })
  externalId: string;
}


export class GetMessengerAccountSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetMessengerAccountSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetMessengerAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetMessengerAccountSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetMessengerAccountSecurityOption2;
}


export class GetMessengerAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMessengerAccountPathParams;

  @Metadata()
  security: GetMessengerAccountSecurity;
}


export class GetMessengerAccountResponse extends SpeakeasyBase {
  @Metadata()
  fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  messengerAccountResponse?: shared.MessengerAccountResponse;

  @Metadata()
  statusCode: number;
}
