import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateStartupUserRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  startupUserDto?: shared.StartupUserDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  startupUserDto1?: shared.StartupUserDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  startupUserDto2?: shared.StartupUserDto;
}


export class UpdateStartupUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateStartupUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: UpdateStartupUserRequests;

  @SpeakeasyMetadata()
  security: UpdateStartupUserSecurity;
}


export class UpdateStartupUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
