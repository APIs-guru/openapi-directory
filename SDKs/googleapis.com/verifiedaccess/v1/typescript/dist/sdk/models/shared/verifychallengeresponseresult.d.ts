import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Result message for VerifiedAccess.VerifyChallengeResponse.
**/
export declare class VerifyChallengeResponseResult extends SpeakeasyBase {
    deviceEnrollmentId?: string;
    devicePermanentId?: string;
    signedPublicKeyAndChallenge?: string;
    verificationOutput?: string;
}
