import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest
/** 
 * Request for Identitytoolkit-VerifyPhoneNumber
**/
export class IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionInfo" })
  sessionInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=temporaryProof" })
  temporaryProof?: string;

  @SpeakeasyMetadata({ data: "json, name=verificationProof" })
  verificationProof?: string;
}
