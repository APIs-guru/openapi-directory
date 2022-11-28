import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMessengerAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_id" })
  externalId: string;
}


export class GetMessengerAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth?: shared.SchemeBearerAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;
}


export class GetMessengerAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMessengerAccountPathParams;

  @SpeakeasyMetadata()
  security: GetMessengerAccountSecurity;
}


export class GetMessengerAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messengerAccountResponse?: shared.MessengerAccountResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
