import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo
/** 
 * Phone Verification info for a FinalizeMfa response.
**/
export class GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidVerificationProof" })
  androidVerificationProof?: string;

  @SpeakeasyMetadata({ data: "json, name=androidVerificationProofExpireTime" })
  androidVerificationProofExpireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
