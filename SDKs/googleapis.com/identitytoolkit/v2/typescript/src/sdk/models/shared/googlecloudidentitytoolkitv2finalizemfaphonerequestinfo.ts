import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo
/** 
 * Phone Verification info for a FinalizeMfa request.
**/
export class GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidVerificationProof" })
  androidVerificationProof?: string;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=sessionInfo" })
  sessionInfo?: string;
}
