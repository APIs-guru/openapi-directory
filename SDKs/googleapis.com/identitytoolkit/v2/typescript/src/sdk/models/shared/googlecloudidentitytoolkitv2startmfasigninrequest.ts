import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo } from "./googlecloudidentitytoolkitv2startmfaphonerequestinfo";



// GoogleCloudIdentitytoolkitV2StartMfaSignInRequest
/** 
 * Starts multi-factor sign-in by sending the multi-factor auth challenge.
**/
export class GoogleCloudIdentitytoolkitV2StartMfaSignInRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mfaEnrollmentId" })
  mfaEnrollmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=mfaPendingCredential" })
  mfaPendingCredential?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneSignInInfo" })
  phoneSignInInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;

  @SpeakeasyMetadata({ data: "json, name=tenantId" })
  tenantId?: string;
}
