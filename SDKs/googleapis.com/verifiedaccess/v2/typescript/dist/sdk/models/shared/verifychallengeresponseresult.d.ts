import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum VerifyChallengeResponseResultKeyTrustLevelEnum {
    KeyTrustLevelUnspecified = "KEY_TRUST_LEVEL_UNSPECIFIED",
    ChromeOsVerifiedMode = "CHROME_OS_VERIFIED_MODE",
    ChromeOsDeveloperMode = "CHROME_OS_DEVELOPER_MODE",
    ChromeBrowserHwKey = "CHROME_BROWSER_HW_KEY",
    ChromeBrowserOsKey = "CHROME_BROWSER_OS_KEY"
}
/**
 * Result message for VerifiedAccess.VerifyChallengeResponse.
**/
export declare class VerifyChallengeResponseResult extends SpeakeasyBase {
    customerId?: string;
    devicePermanentId?: string;
    deviceSignal?: string;
    keyTrustLevel?: VerifyChallengeResponseResultKeyTrustLevelEnum;
    signedPublicKeyAndChallenge?: string;
    virtualDeviceId?: string;
}
