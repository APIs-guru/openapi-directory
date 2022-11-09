import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetRemoteAccessRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  startupRemoteAccessDto?: shared.StartupRemoteAccessDto;

  @Metadata({ data: "request, media_type=application/json" })
  startupRemoteAccessDto1?: shared.StartupRemoteAccessDto;

  @Metadata({ data: "request, media_type=text/json" })
  startupRemoteAccessDto2?: shared.StartupRemoteAccessDto;
}


export class SetRemoteAccessSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SetRemoteAccessRequest extends SpeakeasyBase {
  @Metadata()
  request: SetRemoteAccessRequests;

  @Metadata()
  security: SetRemoteAccessSecurity;
}


export class SetRemoteAccessResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
