import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPersonLoginPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=login" })
  login: string;
}


export class GetPersonLoginSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetPersonLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPersonLoginPathParams;

  @SpeakeasyMetadata()
  security: GetPersonLoginSecurity;
}


export class GetPersonLoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
