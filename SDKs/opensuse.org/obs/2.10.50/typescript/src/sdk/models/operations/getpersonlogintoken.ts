import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPersonLoginTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=login" })
  login: string;
}


export class GetPersonLoginTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetPersonLoginTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPersonLoginTokenPathParams;

  @SpeakeasyMetadata()
  security: GetPersonLoginTokenSecurity;
}


export class GetPersonLoginTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
