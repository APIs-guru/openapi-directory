import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo } from "./googlecloudidentitytoolkitv2finalizemfaphonerequestinfo";


// GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest
/** 
 * Finalizes sign-in by verifying MFA challenge.
**/
export class GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=mfaPendingCredential" })
  mfaPendingCredential?: string;

  @Metadata({ data: "json, name=phoneVerificationInfo" })
  phoneVerificationInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;

  @Metadata({ data: "json, name=tenantId" })
  tenantId?: string;
}
