import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse
/** 
 * Response for Identitytoolkit-VerifyPhoneNumber
**/
export class IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiresIn" })
  expiresIn?: string;

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=isNewUser" })
  isNewUser?: boolean;

  @Metadata({ data: "json, name=localId" })
  localId?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;

  @Metadata({ data: "json, name=temporaryProof" })
  temporaryProof?: string;

  @Metadata({ data: "json, name=temporaryProofExpiresIn" })
  temporaryProofExpiresIn?: string;

  @Metadata({ data: "json, name=verificationProof" })
  verificationProof?: string;

  @Metadata({ data: "json, name=verificationProofExpiresIn" })
  verificationProofExpiresIn?: string;
}
