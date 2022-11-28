import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDefaultProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDefaultProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetDefaultProfileSecurity;
}


export class GetDefaultProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceProfile?: shared.DeviceProfile;

  @SpeakeasyMetadata()
  statusCode: number;
}
