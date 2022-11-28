import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request of getting a code for user confirmation (reset password, change email etc.)
**/
export declare class Relyingparty extends SpeakeasyBase {
    androidInstallApp?: boolean;
    androidMinimumVersion?: string;
    androidPackageName?: string;
    canHandleCodeInApp?: boolean;
    captchaResp?: string;
    challenge?: string;
    continueUrl?: string;
    email?: string;
    iOsAppStoreId?: string;
    iOsBundleId?: string;
    idToken?: string;
    kind?: string;
    newEmail?: string;
    requestType?: string;
    userIp?: string;
}
