import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetKeysSecurity;
}


export class GetKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authenticationInfoQueryResult?: shared.AuthenticationInfoQueryResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
