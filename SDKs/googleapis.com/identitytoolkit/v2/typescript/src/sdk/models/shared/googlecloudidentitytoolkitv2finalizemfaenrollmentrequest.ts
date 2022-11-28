import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo } from "./googlecloudidentitytoolkitv2finalizemfaphonerequestinfo";



// GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest
/** 
 * Finishes enrolling a second factor for the user.
**/
export class GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneVerificationInfo" })
  phoneVerificationInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;

  @SpeakeasyMetadata({ data: "json, name=tenantId" })
  tenantId?: string;
}
