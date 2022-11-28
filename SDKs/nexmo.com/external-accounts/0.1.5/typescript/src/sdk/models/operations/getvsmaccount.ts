import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVsmAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_id" })
  externalId: string;
}


export class GetVsmAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth?: shared.SchemeBearerAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;
}


export class GetVsmAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVsmAccountPathParams;

  @SpeakeasyMetadata()
  security: GetVsmAccountSecurity;
}


export class GetVsmAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vsmAccountResponse?: shared.VsmAccountResponse;
}
