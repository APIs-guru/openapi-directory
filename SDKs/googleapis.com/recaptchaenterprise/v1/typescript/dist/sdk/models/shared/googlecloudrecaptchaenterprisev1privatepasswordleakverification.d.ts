import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Private password leak verification info.
**/
export declare class GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput extends SpeakeasyBase {
    encryptedUserCredentialsHash?: string;
    lookupHashPrefix?: string;
}
/**
 * Private password leak verification info.
**/
export declare class GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification extends SpeakeasyBase {
    encryptedLeakMatchPrefixes?: string[];
    encryptedUserCredentialsHash?: string;
    lookupHashPrefix?: string;
    reencryptedUserCredentialsHash?: string;
}
