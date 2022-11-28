import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse
/** 
 * Response for Identitytoolkit-VerifyPhoneNumber
**/
export class IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiresIn" })
  expiresIn?: string;

  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=isNewUser" })
  isNewUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=localId" })
  localId?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken?: string;

  @SpeakeasyMetadata({ data: "json, name=temporaryProof" })
  temporaryProof?: string;

  @SpeakeasyMetadata({ data: "json, name=temporaryProofExpiresIn" })
  temporaryProofExpiresIn?: string;

  @SpeakeasyMetadata({ data: "json, name=verificationProof" })
  verificationProof?: string;

  @SpeakeasyMetadata({ data: "json, name=verificationProofExpiresIn" })
  verificationProofExpiresIn?: string;
}
