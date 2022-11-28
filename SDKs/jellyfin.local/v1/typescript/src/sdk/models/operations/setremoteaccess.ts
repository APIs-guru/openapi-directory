import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetRemoteAccessRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  startupRemoteAccessDto?: shared.StartupRemoteAccessDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  startupRemoteAccessDto1?: shared.StartupRemoteAccessDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  startupRemoteAccessDto2?: shared.StartupRemoteAccessDto;
}


export class SetRemoteAccessSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SetRemoteAccessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SetRemoteAccessRequests;

  @SpeakeasyMetadata()
  security: SetRemoteAccessSecurity;
}


export class SetRemoteAccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
