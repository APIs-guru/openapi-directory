import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for Identitytoolkit-VerifyPhoneNumber
**/
export declare class IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest extends SpeakeasyBase {
    code?: string;
    idToken?: string;
    operation?: string;
    phoneNumber?: string;
    sessionInfo?: string;
    temporaryProof?: string;
    verificationProof?: string;
}
