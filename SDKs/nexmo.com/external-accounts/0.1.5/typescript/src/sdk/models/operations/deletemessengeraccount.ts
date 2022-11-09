import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteMessengerAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=external_id" })
  externalId: string;
}


export class DeleteMessengerAccountSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteMessengerAccountSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class DeleteMessengerAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteMessengerAccountSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteMessengerAccountSecurityOption2;
}


export class DeleteMessengerAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMessengerAccountPathParams;

  @Metadata()
  security: DeleteMessengerAccountSecurity;
}


export class DeleteMessengerAccountResponse extends SpeakeasyBase {
  @Metadata()
  fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;

  @Metadata()
  fourHundredAndThreeResponse?: shared.FourHundredAndThreeResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
