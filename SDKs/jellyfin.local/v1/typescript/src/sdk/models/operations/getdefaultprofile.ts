import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDefaultProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDefaultProfileRequest extends SpeakeasyBase {
  @Metadata()
  security: GetDefaultProfileSecurity;
}


export class GetDefaultProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceProfile?: shared.DeviceProfile;

  @Metadata()
  statusCode: number;
}
