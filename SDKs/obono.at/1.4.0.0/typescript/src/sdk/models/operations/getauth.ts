import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAuthSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetAuthRequest extends SpeakeasyBase {
  @Metadata()
  security: GetAuthSecurity;
}


export class GetAuthResponse extends SpeakeasyBase {
  @Metadata()
  authResult?: shared.AuthResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
