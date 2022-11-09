import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo } from "./googlecloudidentitytoolkitv2startmfaphoneresponseinfo";


// GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse
/** 
 * StartMfaEnrollment response.
**/
export class GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=phoneSessionInfo" })
  phoneSessionInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo;
}
