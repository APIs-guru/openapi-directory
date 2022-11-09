import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIdentitytoolkitV2WithdrawMfaRequest
/** 
 * Withdraws MFA.
**/
export class GoogleCloudIdentitytoolkitV2WithdrawMfaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=mfaEnrollmentId" })
  mfaEnrollmentId?: string;

  @Metadata({ data: "json, name=tenantId" })
  tenantId?: string;
}
