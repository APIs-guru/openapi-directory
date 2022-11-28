import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAuthSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetAuthSecurity;
}


export class GetAuthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authResult?: shared.AuthResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
