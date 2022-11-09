import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo } from "./googlecloudidentitytoolkitv2finalizemfaphonerequestinfo";


// GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest
/** 
 * Finishes enrolling a second factor for the user.
**/
export class GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=phoneVerificationInfo" })
  phoneVerificationInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;

  @Metadata({ data: "json, name=tenantId" })
  tenantId?: string;
}
