import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}


export class UpdateProfileRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  deviceProfile?: shared.DeviceProfile;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  deviceProfile1?: shared.DeviceProfile;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  deviceProfile2?: shared.DeviceProfile;
}


export class UpdateProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateProfilePathParams;

  @SpeakeasyMetadata()
  request?: UpdateProfileRequests;

  @SpeakeasyMetadata()
  security: UpdateProfileSecurity;
}


export class UpdateProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
