import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateProfileRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  deviceProfile?: shared.DeviceProfile;

  @Metadata({ data: "request, media_type=application/json" })
  deviceProfile1?: shared.DeviceProfile;

  @Metadata({ data: "request, media_type=text/json" })
  deviceProfile2?: shared.DeviceProfile;
}


export class CreateProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CreateProfileRequest extends SpeakeasyBase {
  @Metadata()
  request?: CreateProfileRequests;

  @Metadata()
  security: CreateProfileSecurity;
}


export class CreateProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
