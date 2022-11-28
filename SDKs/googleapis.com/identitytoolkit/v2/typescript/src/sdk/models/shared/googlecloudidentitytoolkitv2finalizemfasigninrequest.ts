import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo } from "./googlecloudidentitytoolkitv2finalizemfaphonerequestinfo";



// GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest
/** 
 * Finalizes sign-in by verifying MFA challenge.
**/
export class GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mfaPendingCredential" })
  mfaPendingCredential?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneVerificationInfo" })
  phoneVerificationInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;

  @SpeakeasyMetadata({ data: "json, name=tenantId" })
  tenantId?: string;
}
