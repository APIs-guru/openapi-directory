import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo } from "./googlecloudidentitytoolkitv2startmfaphoneresponseinfo";



// GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse
/** 
 * StartMfaEnrollment response.
**/
export class GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phoneSessionInfo" })
  phoneSessionInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo;
}
