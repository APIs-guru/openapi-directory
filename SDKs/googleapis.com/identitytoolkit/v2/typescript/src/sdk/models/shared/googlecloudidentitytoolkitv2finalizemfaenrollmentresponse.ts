import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo } from "./googlecloudidentitytoolkitv2finalizemfaphoneresponseinfo";



// GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse
/** 
 * FinalizeMfaEnrollment response.
**/
export class GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneAuthInfo" })
  phoneAuthInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo;

  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
