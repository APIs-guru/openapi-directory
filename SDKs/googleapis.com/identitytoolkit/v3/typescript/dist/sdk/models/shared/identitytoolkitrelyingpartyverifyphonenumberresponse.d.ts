import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response for Identitytoolkit-VerifyPhoneNumber
**/
export declare class IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse extends SpeakeasyBase {
    expiresIn?: string;
    idToken?: string;
    isNewUser?: boolean;
    localId?: string;
    phoneNumber?: string;
    refreshToken?: string;
    temporaryProof?: string;
    temporaryProofExpiresIn?: string;
    verificationProof?: string;
    verificationProofExpiresIn?: string;
}
