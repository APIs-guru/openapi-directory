import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFirstUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetFirstUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetFirstUserSecurity;
}


export class GetFirstUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  startupUserDto?: shared.StartupUserDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
