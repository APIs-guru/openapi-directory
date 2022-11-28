import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo } from "./googlecloudidentitytoolkitv2startmfaphonerequestinfo";



// GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest
/** 
 * Sends MFA enrollment verification SMS for a user.
**/
export class GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneEnrollmentInfo" })
  phoneEnrollmentInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;

  @SpeakeasyMetadata({ data: "json, name=tenantId" })
  tenantId?: string;
}
