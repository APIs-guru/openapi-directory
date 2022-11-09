import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo } from "./googlecloudidentitytoolkitv2startmfaphonerequestinfo";


// GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest
/** 
 * Sends MFA enrollment verification SMS for a user.
**/
export class GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=phoneEnrollmentInfo" })
  phoneEnrollmentInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;

  @Metadata({ data: "json, name=tenantId" })
  tenantId?: string;
}
