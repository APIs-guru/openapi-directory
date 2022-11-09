import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest
/** 
 * Request for Identitytoolkit-VerifyPhoneNumber
**/
export class IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=operation" })
  operation?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=sessionInfo" })
  sessionInfo?: string;

  @Metadata({ data: "json, name=temporaryProof" })
  temporaryProof?: string;

  @Metadata({ data: "json, name=verificationProof" })
  verificationProof?: string;
}
