import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}


export class UpdateProfileRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  deviceProfile?: shared.DeviceProfile;

  @Metadata({ data: "request, media_type=application/json" })
  deviceProfile1?: shared.DeviceProfile;

  @Metadata({ data: "request, media_type=text/json" })
  deviceProfile2?: shared.DeviceProfile;
}


export class UpdateProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateProfilePathParams;

  @Metadata()
  request?: UpdateProfileRequests;

  @Metadata()
  security: UpdateProfileSecurity;
}


export class UpdateProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
