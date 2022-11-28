import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWaAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_id" })
  externalId: string;
}


export class GetWaAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth?: shared.SchemeBearerAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;
}


export class GetWaAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWaAccountPathParams;

  @SpeakeasyMetadata()
  security: GetWaAccountSecurity;
}


export class GetWaAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  waAccountResponse?: shared.WaAccountResponse;
}
