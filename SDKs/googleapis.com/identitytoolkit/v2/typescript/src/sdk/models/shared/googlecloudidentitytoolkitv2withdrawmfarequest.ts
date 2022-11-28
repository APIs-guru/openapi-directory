import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIdentitytoolkitV2WithdrawMfaRequest
/** 
 * Withdraws MFA.
**/
export class GoogleCloudIdentitytoolkitV2WithdrawMfaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=mfaEnrollmentId" })
  mfaEnrollmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=tenantId" })
  tenantId?: string;
}
