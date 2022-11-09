import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetKeysRequest extends SpeakeasyBase {
  @Metadata()
  security: GetKeysSecurity;
}


export class GetKeysResponse extends SpeakeasyBase {
  @Metadata()
  authenticationInfoQueryResult?: shared.AuthenticationInfoQueryResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
