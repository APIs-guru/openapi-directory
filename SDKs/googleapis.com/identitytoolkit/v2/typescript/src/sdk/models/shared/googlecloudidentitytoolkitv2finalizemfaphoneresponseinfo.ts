import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo
/** 
 * Phone Verification info for a FinalizeMfa response.
**/
export class GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidVerificationProof" })
  androidVerificationProof?: string;

  @Metadata({ data: "json, name=androidVerificationProofExpireTime" })
  androidVerificationProofExpireTime?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
