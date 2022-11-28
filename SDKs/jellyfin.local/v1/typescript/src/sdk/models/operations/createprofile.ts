import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateProfileRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  deviceProfile?: shared.DeviceProfile;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  deviceProfile1?: shared.DeviceProfile;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  deviceProfile2?: shared.DeviceProfile;
}


export class CreateProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CreateProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: CreateProfileRequests;

  @SpeakeasyMetadata()
  security: CreateProfileSecurity;
}


export class CreateProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
