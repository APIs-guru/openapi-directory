import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo
/** 
 * Phone Verification info for a FinalizeMfa request.
**/
export class GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidVerificationProof" })
  androidVerificationProof?: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionInfo" })
  sessionInfo?: string;
}
