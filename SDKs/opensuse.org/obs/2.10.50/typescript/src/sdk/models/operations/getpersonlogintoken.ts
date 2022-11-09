import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPersonLoginTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=login" })
  login: string;
}


export class GetPersonLoginTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetPersonLoginTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPersonLoginTokenPathParams;

  @Metadata()
  security: GetPersonLoginTokenSecurity;
}


export class GetPersonLoginTokenResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
