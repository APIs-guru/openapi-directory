import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo } from "./googlecloudidentitytoolkitv2startmfaphonerequestinfo";


// GoogleCloudIdentitytoolkitV2StartMfaSignInRequest
/** 
 * Starts multi-factor sign-in by sending the multi-factor auth challenge.
**/
export class GoogleCloudIdentitytoolkitV2StartMfaSignInRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=mfaEnrollmentId" })
  mfaEnrollmentId?: string;

  @Metadata({ data: "json, name=mfaPendingCredential" })
  mfaPendingCredential?: string;

  @Metadata({ data: "json, name=phoneSignInInfo" })
  phoneSignInInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;

  @Metadata({ data: "json, name=tenantId" })
  tenantId?: string;
}
