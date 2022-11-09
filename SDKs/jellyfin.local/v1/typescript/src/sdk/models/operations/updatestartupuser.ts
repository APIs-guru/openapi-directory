import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateStartupUserRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  startupUserDto?: shared.StartupUserDto;

  @Metadata({ data: "request, media_type=application/json" })
  startupUserDto1?: shared.StartupUserDto;

  @Metadata({ data: "request, media_type=text/json" })
  startupUserDto2?: shared.StartupUserDto;
}


export class UpdateStartupUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateStartupUserRequest extends SpeakeasyBase {
  @Metadata()
  request?: UpdateStartupUserRequests;

  @Metadata()
  security: UpdateStartupUserSecurity;
}


export class UpdateStartupUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
