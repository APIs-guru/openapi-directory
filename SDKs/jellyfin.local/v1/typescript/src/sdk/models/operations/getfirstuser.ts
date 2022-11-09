import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFirstUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetFirstUserRequest extends SpeakeasyBase {
  @Metadata()
  security: GetFirstUserSecurity;
}


export class GetFirstUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  startupUserDto?: shared.StartupUserDto;

  @Metadata()
  statusCode: number;
}
